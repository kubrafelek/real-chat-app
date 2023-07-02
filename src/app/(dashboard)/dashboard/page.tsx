import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="container">
        <p>{JSON.stringify(session)}</p>
      </div>
    </>
  );
};

export default page;
