// import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import TimeOfService from "@/components/TimeOfService";

export default function Home() {

  return (
    <PageLayout>
      <div className="text-4xl w-full max-w-[600px]">
        <span className="text-orange-600 font-extrabold">Hello,</span>&nbsp;
        I am <span className="text-green-6s00 font-bold text-underline">Paul Gardiner</span>. <span className="text-gray-600">Software Engineer, <span className="text-indigo-800 font-bold">CTO at Ittybit</span>.</span>      
      </div>

      <div className="mt-10">
        <TimeOfService />
      </div>
      <div className="mt-10">
        <div className="text-2xl font-bold">Email Me</div>
        <div className="text-gray-600"><a href="mailto:me@paulg.io">me@paulg.io</a></div>
      </div>
      <div className="mt-10">
      </div>
    </PageLayout>
  );
}
