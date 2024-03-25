import connectDB from "@/config/database";

export const GET = async (req) => {
  try {
    await connectDB();

    return new Response(JSON.stringify({ mesage: "Hello World" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong !", { status: 500 });
  }
};
