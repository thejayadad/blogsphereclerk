import Editor from "@/components/editor/editor";
import UserList from "@/components/users/user-list";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="w-full min-h-screen">
      <div className="mx-auto max-w-screen-lg flex flex-col w-full justify-center items-center min-h-screen">
      homePage
      <UserButton />
      <UserList />
      </div>
    </section>
  );
}
