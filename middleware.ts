import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Définir les routes protégées
const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  // Si la route actuelle fait partie des routes protégées
  if (isProtectedRoute(req)) {
   auth.protect();// protège la route
  }
});

export const config = {
  matcher: [ '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',],
};
