import React from "react";
import {Feature, OptForm } from '../components';
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>All the Lectures and Practicals.</Feature.Title>
          <Feature.SubTitle>Watch anywhere Watch anytime</Feature.SubTitle>
        
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Start Now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create your account
          </OptForm.Text>
        </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
