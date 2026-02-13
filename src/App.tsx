import Hero from "./components/Hero";
import ExecutiveSummary from "./components/ExecutiveSummary";
import Context from "./components/Context";
import ProblemSpace from "./components/ProblemSpace";
import SuccessfulFlow from "./components/SuccessfulFlow";
import DoubleDiamond from "./components/DoubleDiamond";
import Initiative from "./components/Initiative";
import Impact from "./components/Impact";
import UserDefinitions from "./components/UserDefinitions";
import TableOfContents from "./components/TableOfContents";
import { initiatives } from "./data/caseStudy";

function App() {
  const initiativeOrder = [
    "Table view",
    "New Onboarding",
    "Live Boards",
    "Order Cards",
  ];
  const initiativeOrderLookup = new Map(
    initiativeOrder.map((title, index) => [title, index]),
  );
  const orderedInitiatives = [...initiatives].sort((a, b) => {
    const aOrder = initiativeOrderLookup.get(a.title);
    const bOrder = initiativeOrderLookup.get(b.title);

    if (aOrder === undefined && bOrder === undefined) {
      return 0;
    }
    if (aOrder === undefined) {
      return 1;
    }
    if (bOrder === undefined) {
      return -1;
    }

    return aOrder - bOrder;
  });

  const tocItems = [
    { id: "hero", label: "Intro" },
    { id: "summary", label: "90-sec Summary" },
    { id: "context", label: "Context" },
    { id: "problem-space", label: "Problem Space", variant: "child" as const },
    { id: "successful-flow", label: "Success Flow", variant: "child" as const },
    { id: "user-definitions", label: "Users", variant: "child" as const },
    { id: "double-diamond", label: "Design Process" },
    { id: "initiatives", label: "Initiatives" },
    ...orderedInitiatives.map((initiative, index) => ({
      id: `initiative-${index + 1}`,
      label: initiative.title,
      variant: "child" as const,
    })),
    { id: "impact", label: "Impact" },
  ];

  return (
    <main className="pb-8">
      <TableOfContents items={tocItems} />
      <div id="hero" className="scroll-mt-24">
        <Hero />
      </div>
      <div id="summary" className="scroll-mt-24">
        <ExecutiveSummary />
      </div>
      <div id="context" className="scroll-mt-24">
        <Context />
      </div>
      <div id="problem-space" className="scroll-mt-24">
        <ProblemSpace />
      </div>
      <div id="successful-flow" className="scroll-mt-24">
        <SuccessfulFlow />
      </div>
      <div id="user-definitions" className="scroll-mt-24">
        <UserDefinitions />
      </div>
      <div id="double-diamond" className="scroll-mt-24">
        <DoubleDiamond />
      </div>
      <div id="initiatives" className="scroll-mt-24">
        <section className="container-shell mt-20 md:mt-32">
          <h2 className="mt-2 text-4xl md:text-6xl">Design Initiatives</h2>
        </section>
        {orderedInitiatives.map((initiative, index) => (
          <div
            key={initiative.title}
            id={`initiative-${index + 1}`}
            className="scroll-mt-24"
          >
            <Initiative initiative={initiative} index={index} />
          </div>
        ))}
      </div>
      <div id="impact" className="scroll-mt-24">
        <Impact />
      </div>
    </main>
  );
}

export default App;
