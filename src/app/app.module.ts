import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeoAgencyComponent } from './components/pages/seo-agency/seo-agency.component';
import { AiStartupComponent } from './components/pages/ai-startup/ai-startup.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NavbarStyleFourComponent } from './components/common/navbar-style-four/navbar-style-four.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { CaseStudyComponent } from './components/pages/case-study/case-study.component';
import { CaseStudyDetailsComponent } from './components/pages/case-study-details/case-study-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { WebdevelopmentComponent } from './components/pages/webdevelopment/webdevelopment.component';
import { AppdevelopmentComponent } from './components/pages/appdevelopment/appdevelopment.component';
import { SeoComponent } from './components/pages/seo/seo.component';
import { SmmComponent } from './components/pages/smm/smm.component';
import { GraphicdesigningComponent } from './components/pages/graphicdesigning/graphicdesigning.component';
import { DigitalmarketingComponent } from './components/pages/digitalmarketing/digitalmarketing.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { PrivacypolicComponent } from './components/pages/privacypolic/privacypolic.component';
import { LeadsComponent } from './components/leads/leads.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    SeoAgencyComponent,
    AiStartupComponent,
    MachineLearningComponent,
    PreloaderComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    FooterStyleTwoComponent,
    NavbarStyleThreeComponent,
    AboutComponent,
    NavbarStyleFourComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    TestimonialsComponent,
    CaseStudyComponent,
    CaseStudyDetailsComponent,
    ErrorComponent,
    SignInComponent,
    SignUpComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ComingSoonComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    BlogDetailsComponent,
    BlogComponent,
    ContactComponent,
    WebdevelopmentComponent,
    AppdevelopmentComponent,
    SeoComponent,
    SmmComponent,
    GraphicdesigningComponent,
    DigitalmarketingComponent,
    SidebarComponent,
    PrivacypolicComponent,
    LeadsComponent,
    ProductsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [BlogService, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
