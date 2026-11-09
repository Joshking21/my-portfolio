"use client";
import { useEffect } from "react";
import OfficePage, { OfficeButton } from "./Components/ui/OfficePage";

// Something broke while loading a page: a themed "paper jam" with a retry
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <OfficePage
      code="500"
      tab="No.500 · PAPER JAM"
      stamp="JAMMED"
      title="Something jammed"
      note="Not your fault. The printer's just moody."
      reference={error?.digest}
      actions={
        <>
          <OfficeButton onClick={() => reset()} primary>TRY AGAIN</OfficeButton>
          <OfficeButton href="/">BACK TO THE HOMEPAGE</OfficeButton>
        </>
      }
    >
      <p>Something went wrong while loading this page. Give it another go, and if it keeps happening, let me know through the contact form.</p>
    </OfficePage>
  );
}
