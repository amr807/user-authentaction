import NextAuth from "next-auth";

import { handler } from "./options";

const handlers=NextAuth(handler)

export { handlers as GET, handlers as POST };
