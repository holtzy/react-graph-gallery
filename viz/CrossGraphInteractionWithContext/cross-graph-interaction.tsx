import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import { isEqual } from "lodash";

// Create a react context
// Wrap some react components in CrossGraphInteractionContext.provider and they will have access to its value
const CrossGraphInteractionContext = createContext<EventEmitter<
  string[] | null
> | null>(null);

// Create an event emitter
class EventEmitter<T> {
  private eventTarget: EventTarget;
  constructor() {
    this.eventTarget = new EventTarget();
  }

  addListener(callback: (tags: T) => void) {
    const handler = (e: CustomEvent<T>) => {
      callback(e.detail);
    };

    this.eventTarget.addEventListener("tagschange", handler as any);

    return () => {
      this.eventTarget.removeEventListener("tagschange", handler as any);
    };
  }

  emit(tags: T) {
    this.eventTarget.dispatchEvent(
      new CustomEvent<T>("tagschange", { detail: tags })
    );
  }
}

// Context provider: wrap your charts inside it
export const CrossGraphInteractionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const eventTargetRef = useRef(new EventEmitter<string | null>());

  return (
    <CrossGraphInteractionContext.Provider value={eventTargetRef.current}>
      {children}
    </CrossGraphInteractionContext.Provider>
  );
};

// The hook allowing to each graph (=the consumers) to use the context and emit something in it.
export const useCrossGraphInteraction = (
  group: string,
  { onReceiveGroup }: { onReceiveGroup: (tags: string | null) => void }
) => {
  // become a consumer of the context
  const eventEmitter = useContext(CrossGraphInteractionContext);

  const onReceivegroupRef = useRef(onReceiveGroup);

  useLayoutEffect(() => {
    onReceivegroupRef.current = onReceiveGroup;
  });

  const previousTagsRef = useRef<string[] | null>(null);

  const onGroupChange = useCallback((tags: string[] | null) => {
    const prevTags = previousTagsRef.current;
    if (!isEqual(tags, prevTags)) {
      onReceiveTagsRef.current(tags);
    }
    previousTagsRef.current = tags;
  }, []);

  useEffect(() => {
    return eventEmitter?.addListener((tags) => {
      const filteredTags =
        tags?.filter((tag) => groupTagKeys.includes(getTagKey(tag))) ?? [];
      onTagsChange(filteredTags.length === 0 ? null : filteredTags);
    });
  }, [onTagsChange, eventEmitter, ...groupTagKeys]);

  const emitCrossWidgetTags = React.useCallback(
    (tags: string[] | null) => eventEmitter?.emit(tags),
    [eventEmitter]
  );

  return { emitCrossWidgetTags };
};
