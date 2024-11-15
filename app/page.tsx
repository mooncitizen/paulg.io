import Header from "@/components/Header";
import Subtitle from "@/components/Subtitle";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <Header title="Paul Gardiner" subtitle="Software Engineer" />

        <div className="mt-10">
          <div className="text-3xl font-extrabold">About Me</div>
        </div>
      </div>
    </PageLayout>
  );
}
