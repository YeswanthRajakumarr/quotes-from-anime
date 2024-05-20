import QuotesCard from "@/components/quotes/QuotesCard";
import QuotesSubmission from "@/components/quotes/QuotesSubmission";
import ReactionCard from "@/components/reactions/ReactionCard";

export default function Home() {
  return (
    <>
      <QuotesCard></QuotesCard>
      <ReactionCard />
      <QuotesSubmission />
    </>
  );
}
