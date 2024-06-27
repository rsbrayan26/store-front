import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsComponent } from "./pages/us/us.component";
import { ProductComponent } from "./pages/product/product.component";

const routes: Routes = [
  { path: "inicio", component: HomeComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "nosotros", component: UsComponent },
  { path: "producto/:id", component: ProductComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
