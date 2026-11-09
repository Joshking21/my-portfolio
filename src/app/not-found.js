import OfficePage, { OfficeButton } from "./Components/ui/OfficePage";

export const metadata = { title: "File not found" };

// 404: the requested page isn't in the cabinet
export default function NotFound() {
  return (
    <OfficePage
      code="404"
      tab="No.404 · MISSING"
      stamp="MISSING"
      title="File not found"
      note="Psst… the good stuff is in the portfolio."
      actions={
        <>
          <OfficeButton href="/" primary>BACK TO THE HOMEPAGE</OfficeButton>
          <OfficeButton href="/#portfolio">SEE MY CASE FILES</OfficeButton>
        </>
      }
    >
      <p>
        I checked every drawer, but the page you&apos;re looking for isn&apos;t in the cabinet. It may have been moved,
        renamed, or never filed in the first place.
      </p>
      <p className="mt-3">If you followed a link here, try the homepage, or write me a letter and I&apos;ll sort it out.</p>
    </OfficePage>
  );
}
