import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Research</Footer.Link>
          <Footer.Link href="#">Academics</Footer.Link>
          <Footer.Link href="#">Corprate Information</Footer.Link>
          <Footer.Link href="#">NIT Kurukshetra Events</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Carrers</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break/>
      <Footer.Text>Nit Kurukshetra Video Library</Footer.Text>
    </Footer>
  );
}