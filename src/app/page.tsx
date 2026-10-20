import { Bio } from "@/components/Bio";
import { BlogList } from "@/components/BlogList";
import { HomePainting } from "@/components/HomePainting";
import { NotesList } from "@/components/NotesList";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./home-layout.css";

export default function Home() {
  return (
    <main className="site-shell">
      <article className="content-frame">
        <div className="home-layout">
          <div className="home-copy">
            <SiteHeader />
            <div className="flex flex-col gap-12">
              <Bio />
              <NotesList />
              <BlogList />
            </div>
            <SiteFooter />
          </div>

          <HomePainting />
        </div>
      </article>
    </main>
  );
}
