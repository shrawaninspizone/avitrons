import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AiStartupComponent } from './components/pages/ai-startup/ai-startup.component';
import { AboutComponent } from './components/pages/about/about.component';
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
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AppdevelopmentComponent } from './components/pages/appdevelopment/appdevelopment.component';
import { WebdevelopmentComponent } from './components/pages/webdevelopment/webdevelopment.component';
import { SeoComponent } from './components/pages/seo/seo.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SmmComponent } from './components/pages/smm/smm.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { GraphicdesigningComponent } from './components/pages/graphicdesigning/graphicdesigning.component';
import { PrivacypolicComponent } from './components/pages/privacypolic/privacypolic.component';
import { LeadsComponent } from './components/leads/leads.component';
import { DigitalmarketingComponent } from './components/pages/digitalmarketing/digitalmarketing.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component'

const routes: Routes = [
    {path: '', component: AiStartupComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'case-study', component: CaseStudyComponent},
    {path: 'case-study-details', component: CaseStudyDetailsComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'sidebar', component: SidebarComponent},
    //{path: 'blog-details', component: BlogDetailsComponent},
    { path: 'posts/:slug', component: BlogDetailsComponent },
    {path: 'contact', component: ContactComponent},
    {path: 'appdevelopment', component: AppdevelopmentComponent},
    {path: 'webdevelopment', component: WebdevelopmentComponent},
    {path: 'seo', component: SeoComponent},
    {path: 'smm', component: SmmComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'digitalmarketing', component: DigitalmarketingComponent},
    {path: 'graphicdesigning', component: GraphicdesigningComponent},
    {path: 'privacypolic', component: PrivacypolicComponent},   
    {path: 'leads', component: LeadsComponent},
    {path: '**', component: ErrorComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }