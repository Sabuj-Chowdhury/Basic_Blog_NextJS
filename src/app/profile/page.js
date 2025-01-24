import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="text-center mt-10">
      <div className="text-center font-bold text-4xl mb-5">
        <h2>Profile page</h2>
      </div>
      <h1>Welcome, {user.family_name || user.username}!</h1>
      <p>This is your profile page.</p>
    </div>
  );
}
