import { Routes, Route } from "react-router-dom";
import Overview from "./overview/Overview";
import App from "./overview/App";
import LoginRegister from "./LoginRegister/index";
import ForgotPassword from "./LoginRegister/ForgotPassword";
import ResetPassword from "./LoginRegister/ResetPassword";

import AccessLogger from "./components/AccessLogger";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

/* Import semua materials */
import Adjectives from "./materials/Adjectives";
import Adverb from "./materials/Adverb";
import Articles from "./materials/Articles";
import Causative from "./materials/Causative";
import FutureP from "./materials/FutureP";
import Indirect from "./materials/Indirect";
import Past from "./materials/Past";
import PastP from "./materials/PastP";
import Prepositions from "./materials/Prepositions";
import Present from "./materials/Present";
import PresentPerfect from "./materials/PresentPerfect";
import Question from "./materials/Question";
import SimpleF from "./materials/SimpleF";
import Subject from "./materials/Subject";
import Tenses from "./materials/Tenses";
import Conditionals from "./materials/Conditional";
import Conjunctions from "./materials/Conjunctions";
import FutureContinuousTense from "./materials/FutureContinuousTense";
import FuturePerfectContinuousTense from "./materials/FuturePerfectContinuousTense";
import Gerund from "./materials/Gerund";
import HelpingVerbs from "./materials/HelpingVerbs";
import ModalAuxiliary from "./materials/ModalAuxilliary";
import Nouns from "./materials/Nouns";
import PassiveVoice from "./materials/PassiveVoice";
import PastContinuousTense from "./materials/PastContinuousTense";
import PastPerfectContinuousTense from "./materials/PastPerfectContinuousTense";
import Pronouns from "./materials/Pronouns";
import PresentContinuousTense from "./materials/PresentContinuousTense";
import PresentPerfectContinuousTense from "./materials/PresentPerfectContinuousTense";
import Verbs from "./materials/Verbs";
import Material from "./materials/Material";

/* Import semua quizzes */
import QuizAdjectives from "./quiz/QuizAdjectives";
import QuizAdverbs from "./quiz/QuizAdverbs";
import QuizArticles from "./quiz/QuizArticles";
import QuizCausative from "./quiz/QuizCausative";
import QuizConditional from "./quiz/QuizConditional";
import QuizConjunctions from "./quiz/QuizConjunctions";
import QuizFutureContinuousTense from "./quiz/QuizFutureContinuousTense";
import QuizFuturePerfectContinuousTense from "./quiz/QuizFuturePerfectContinuousTense";
import QuizGerund from "./quiz/QuizGerund";
import QuizHelpingVerbs from "./quiz/QuizHelpingVerbs";
import QuizIndirectSpeech from "./quiz/QuizIndirectSpeech";
import QuizModalAuxiliary from "./quiz/QuizModalAuxiliary";
import QuizNouns from "./quiz/QuizNouns";
import QuizPassiveVoice from "./quiz/QuizPassiveVoice";
import QuizPastContinuousTense from "./quiz/QuizPastContinuousTense";
import QuizPastPerfectContinuousTense from "./quiz/QuizPastPerfectContinuousTense";
import QuizPastPerfectTense from "./quiz/QuizPastPerfectTense";
import QuizPrepositions from "./quiz/QuizPrepositions";
import QuizPresentContinuousTense from "./quiz/QuizPresentContinuousTense";
import QuizPresentPerfectContinuousTense from "./quiz/QuizPresentPerfectContinuousTense";
import QuizPresentPerfectTense from "./quiz/QuizPresentPerfectTense";
import QuizPronouns from "./quiz/QuizPronouns";
import QuizQuestionWords from "./quiz/QuizQuestionWords";
import QuizSimpleFutureTense from "./quiz/QuizSimpleFutureTense";
import QuizSimplePastTense from "./quiz/QuizSimplePastTense";
import QuizSimplePresentTense from "./quiz/QuizSimplePresentTense";
import QuizSubjectVerbAgreement from "./quiz/QuizSubjectVerbAgreement";
import QuizSubjunctive from "./quiz/QuizSubjunctive";
import QuizVerbs from "./quiz/QuizVerbs";
import QuizTenses from "./quiz/QuizTenses";

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Overview />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/signup" element={<LoginRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <AccessLogger>
              <Layout />
            </AccessLogger>
          </ProtectedRoute>
        }
      >
        {/* Quizzes */}
        <Route path="/adjective/quiz" element={<QuizAdjectives />} />
        <Route path="/adverb/quiz" element={<QuizAdverbs />} />
        <Route path="/articles/quiz" element={<QuizArticles />} />
        <Route path="/indirect/quiz" element={<QuizIndirectSpeech />} />
        <Route path="/futurep/quiz" element={<QuizFuturePerfectContinuousTense />} />
        <Route path="/past/quiz" element={<QuizSimplePastTense />} />
        <Route path="/pastp/quiz" element={<QuizPastPerfectTense />} />
        <Route path="/prepositions/quiz" element={<QuizPrepositions />} />
        <Route path="/present/quiz" element={<QuizSimplePresentTense />} />
        <Route path="/presentperfect/quiz" element={<QuizPresentPerfectTense />} />
        <Route path="/question/quiz" element={<QuizQuestionWords />} />
        <Route path="/simplef/quiz" element={<QuizSimpleFutureTense />} />
        <Route path="/subject/quiz" element={<QuizSubjectVerbAgreement />} />
        <Route path="/quiz/conditional" element={<QuizConditional />} />
        <Route path="/quiz/conjunctions" element={<QuizConjunctions />} />
        <Route path="/quiz/future-continuous-tense" element={<QuizFutureContinuousTense />} />
        <Route path="/quiz/future-perfect-continuous-tense" element={<QuizFuturePerfectContinuousTense />} />
        <Route path="/quiz/gerund" element={<QuizGerund />} />
        <Route path="/quiz/helping-verbs" element={<QuizHelpingVerbs />} />
        <Route path="/quiz/modal-auxiliary" element={<QuizModalAuxiliary />} />
        <Route path="/quiz/nouns" element={<QuizNouns />} />
        <Route path="/quiz/passive-voice" element={<QuizPassiveVoice />} />
        <Route path="/quiz/past-continuous-tense" element={<QuizPastContinuousTense />} />
        <Route path="/quiz/past-perfect-continuous-tense" element={<QuizPastPerfectContinuousTense />} />
        <Route path="/quiz/present-continuous-tense" element={<QuizPresentContinuousTense />} />
        <Route path="/quiz/present-perfect-continuous-tense" element={<QuizPresentPerfectContinuousTense />} />
        <Route path="/quiz/pronouns" element={<QuizPronouns />} />
        <Route path="/quiz/subjunctive" element={<QuizSubjunctive />} />
        <Route path="/quiz/verbs" element={<QuizVerbs />} />
        <Route path="/quiz/causative" element={<QuizCausative />} />
        <Route path="/quiz/tenses" element={<QuizTenses />} />

        {/* Materials */}
        <Route path="/material/:materialId" element={<Material />} />
        <Route path="/adjective" element={<Adjectives />} />
        <Route path="/adverb" element={<Adverb />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/futurep" element={<FutureP />} />
        <Route path="/indirect" element={<Indirect />} />
        <Route path="/past" element={<Past />} />
        <Route path="/pastp" element={<PastP />} />
        <Route path="/prepositions" element={<Prepositions />} />
        <Route path="/present" element={<Present />} />
        <Route path="/presentperfect" element={<PresentPerfect />} />
        <Route path="/question" element={<Question />} />
        <Route path="/simplef" element={<SimpleF />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/causative" element={<Causative />} />
        <Route path="/tenses" element={<Tenses />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/conjunctions" element={<Conjunctions />} />
        <Route path="/futureContinousTense" element={<FutureContinuousTense />} />
        <Route path="/futurePerfectContinousTense" element={<FuturePerfectContinuousTense />} />
        <Route path="/gerund" element={<Gerund />} />
        <Route path="/helpingVerbs" element={<HelpingVerbs />} />
        <Route path="/modalAuxilliary" element={<ModalAuxiliary />} />
        <Route path="/nouns" element={<Nouns />} />
        <Route path="/passiveVoice" element={<PassiveVoice />} />
        <Route path="/pastContinuousTense" element={<PastContinuousTense />} />
        <Route path="/pastPerfectContinuousTense" element={<PastPerfectContinuousTense />} />
        <Route path="/pronouns" element={<Pronouns />} />
        <Route path="/presentContinuousTense" element={<PresentContinuousTense />} />
        <Route path="/presentPerfectContinuousTense" element={<PresentPerfectContinuousTense />} />
        <Route path="/verbs" element={<Verbs />} />

        {/* App */}
        <Route path="/app" element={<App />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
