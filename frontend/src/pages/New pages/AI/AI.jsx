import React from "react";
import AITools from "../AITools/Index";
import AIUseCases from "../AITools/AITools";
import SplitSection from "src/components/New components/SplitSection";
import { AI_Powered_Learning_Tools } from "src/Page_Content/AI_Use_Cases";
import CTASection from "src/components/New components/CTASection";
import { AICTA } from "src/Page_Content/AI_tools";
function AI() {
  return (
    <div>
      <section>
        <AITools />
      </section>
      <section>
        <SplitSection data={AI_Powered_Learning_Tools} />
      </section>
      <section>
        <AIUseCases />
      </section>
      <section>
        <CTASection data={AICTA} />
      </section>
    </div>
  );
}

export default AI;
