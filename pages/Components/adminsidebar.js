import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="text-white">
        <h1 className="text-white ms-5 mt-4">LOGO</h1>
      </div>
      <nav>
        <ul>
          <li><Link href="/admin">Dashboard</Link></li>
          <li><Link href="/admin/post">Add Post</Link></li>
          <li><Link href="/admin/subscriber">Subscribers</Link></li>
          <li><Link href="/contact"><button>Logout</button></Link></li>
        </ul>
      </nav>
    </div>
  );
}