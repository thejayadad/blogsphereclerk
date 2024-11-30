
## CREATE THE APP
- daisyui
- npm i -D daisyui@latest
- update tailwindfile
- folder setup landing & dashboard
- add the layout
- update package.json

## DATA BASE AUTHENICATION
 - convex dashboard
 - create a project
 - go to the docs under nextjs
 - npm i convex@1.17.3 --legacy-peer-deps
 - npx convex dev
 - client provider 
 - in the convex folder add schema.ts
 - build the schema from the docs
 - the click reading data
 - clerk docs
 - create app
 - add login options
 - npm install @clerk/nextjs
 - follow docs
 - setup jwt
 - then inside convex add auth
 - add the auth.config
 - update the layout to look like this:

```
"use client";

import {  ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {ClerkProvider, useAuth} from "@clerk/nextjs"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return ( 
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
         <ConvexProviderWithClerk useAuth={useAuth} client={convex}>{children}</ConvexProviderWithClerk>
      </ClerkProvider>    
  )
}

```

- add the auth states:

```
"use client";

import {  ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {ClerkProvider, SignIn, useAuth} from "@clerk/clerk-react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return ( 
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
         <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <Authenticated>
          {children}
          </Authenticated>
          <Unauthenticated>
            <div className="flex flex-col items-center justify-center h-screen">
              <SignIn routing="hash" />
            </div>
          </Unauthenticated>
          <AuthLoading>
            <p>Loading Auth...</p>
          </AuthLoading>
          </ConvexProviderWithClerk>
      </ClerkProvider>    
  )
}

```
- update to add the user info




## SETUP EDITOR
 - follow the docs
 - create a component file name editor

## DATABASE SETUP 
- npm i mongoose
- db function
- mongodb setup
- model setup
- 