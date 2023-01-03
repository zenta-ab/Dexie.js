import dynamic from "next/dynamic"

import { Inter } from "@next/font/google"

const Invites = dynamic(
  () =>
    import('../components/access-control/Invites').then((mod) => mod.Invites),
  { ssr: false }
);
const NavBar = dynamic(
  () => import('../components/navbar/NavBar').then((mod) => mod.NavBar),
  { ssr: false }
);
const AddTodoList = dynamic(
  () => import('../components/AddTodoList').then((mod) => mod.AddTodoList),
  { ssr: false }
);
const ResetDatabaseButton = dynamic(
  () =>
    import('../components/ResetDatabaseButton').then(
      (mod) => mod.ResetDatabaseButton
    ),
  { ssr: false }
);
const TodoLists = dynamic(
  () => import('../components/TodoLists').then((mod) => mod.TodoLists),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Invites />
        <TodoLists />
        <AddTodoList />
        <ResetDatabaseButton />
      </div>
    </>
  );
}
