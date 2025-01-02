export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <aside>Blog Sidebar (categories, recent posts, etc.)</aside>
        <main>{children}</main>
      </div>
    );
  }