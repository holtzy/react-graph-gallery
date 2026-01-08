import { Badge } from '@/component/UI/badge';
import { Button } from '@/component/UI/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/component/UI/card';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-32 px-6 py-24">
      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <Badge className="w-fit">New course</Badge>

          <h1 className="text-5xl font-semibold tracking-tight leading-tight">
            Build production-ready charts in React + D3 without fighting the DOM
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Learn clean architecture, predictable data flow, and scalable
            interaction patterns for real applications, not fragile demos.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Button size="lg">Join the course</Button>
            <Button size="lg" variant="outline">
              View curriculum
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No prior D3 required · Self-paced · Built for real products
          </p>
        </div>

        {/* Visual placeholder */}
        <div className="rounded-2xl border bg-muted/30 h-[360px] flex items-center justify-center text-muted-foreground">
          Visual / diagram placeholder
        </div>
      </section>

      {/* ---------------- Pain ---------------- */}
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight mb-10">
          If React + D3 feels harder than it should, you’re not alone
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Confusing architecture</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Every tutorial does it differently.</p>
              <p>React and D3 fight over the DOM.</p>
              <p>You copy code without understanding why it works.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fragile code</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>One small change breaks everything.</p>
              <p>Too many refs and useEffect hacks.</p>
              <p>Debugging feels unpredictable.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance pain</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Unnecessary re-renders and stuttering animations.</p>
              <p>Large datasets kill responsiveness.</p>
              <p>Canvas vs SVG feels like guessing.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- Mental model ---------------- */}
      <section className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            A clear mental model for building charts
          </h2>

          <p className="text-muted-foreground">
            Instead of mixing rendering, state, and geometry, you learn how to
            separate responsibilities so your charts stay predictable, scalable,
            and easy to evolve.
          </p>

          <ul className="space-y-3 text-sm">
            <li>• Data → scales → layout → rendering → interaction</li>
            <li>• React owns state and composition</li>
            <li>• D3 owns math and geometry</li>
            <li>• No fragile lifecycle tricks</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-muted/30 h-[320px] flex items-center justify-center text-muted-foreground">
          Architecture diagram placeholder
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto w-full max-w-4xl text-center flex flex-col gap-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Build charts you actually trust in production
        </h2>

        <p className="text-muted-foreground">
          Stop fighting your tools and start building predictable, maintainable
          visualizations with confidence.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg">Join the course</Button>
          <Button size="lg" variant="outline">
            View curriculum
          </Button>
        </div>
      </section>
    </main>
  );
}
