import { GridBackdrop } from "@/components/GridBackdrop";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Body } from "@/components/Body";

export default function BoxSplashPage() {
  return (
    <Body>
      <GridBackdrop>
        <Nav />
        <div>hello</div>
        <Footer />
      </GridBackdrop>
    </Body>
  );
}
