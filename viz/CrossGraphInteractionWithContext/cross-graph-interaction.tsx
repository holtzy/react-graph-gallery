import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { isEqual } from "lodash";

// Create a react context
// Wrap some react components in CrossGraphInteractionContext.provider and they will have access to its value
const CrossGraphInteractionContext = createContext<EventEmitter | null>(null);

// Create an event emitter
class EventEmitter {
  private eventTarget: EventTarget;
  constructor() {
    this.eventTarget = new EventTarget();
  }

  addListener(callback: (group: string | null) => void) {
    const handler = (e: CustomEvent<string | null>) => {
      callback(e.detail);
    };

    this.eventTarget.addEventListener("groupchange", handler as any);

    return () => {
      this.eventTarget.removeEventListener("groupchange", handler as any);
    };
  }

  emit(group: string) {
    this.eventTarget.dispatchEvent(
      new CustomEvent<string | null>("groupchange", { detail: group })
    );
  }
}

// Context provider: wrap your charts inside it
export const CrossGraphInteractionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const eventTargetRef = useRef(new EventEmitter());

  return (
    <CrossGraphInteractionContext.Provider value={eventTargetRef.current}>
      {children}
    </CrossGraphInteractionContext.Provider>
  );
};

// The hook allowing to each graph (= the consumers) to use the context and emit something in it.
export const useCrossGraphInteraction = (
  onReceiveGroup: (group: string | null) => void
) => {
  // become a consumer of the context
  const eventEmitter = useContext(CrossGraphInteractionContext);

  const onReceiveGroupRef = useRef(onReceiveGroup);
  useLayoutEffect(() => {
    onReceiveGroupRef.current = onReceiveGroup;
  });

  const previousGroupRef = useRef<string | null>(null);

  const onGroupChange = useCallback((group: string | null) => {
    const prevGroup = previousGroupRef.current;
    if (!isEqual(group, prevGroup)) {
      onReceiveGroupRef.current(group);
    }
    previousGroupRef.current = group;
  }, []);

  useEffect(() => {
    return eventEmitter?.addListener((group) => {
      onGroupChange(group);
    });
  }, [onGroupChange, eventEmitter]);

  const emitCrossGraphGroup = useCallback(
    (group: string | null) => eventEmitter?.emit(group),
    [eventEmitter]
  );

  return emitCrossGraphGroup;
};
