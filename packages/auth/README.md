# @stemoria/auth

NextAuth.js configuration package for the STEMORIA platform.

## Features

- ✅ Google OAuth provider
- ✅ Credentials provider with bcrypt password hashing  
- ✅ JWT sessions with user roles
- ✅ Prisma adapter integration (when database is available)
- ✅ Audit logging for sign-ins
- ✅ TypeScript support with proper type declarations

## Dependencies Added

- `bcryptjs` - for password hashing
- `zod` - for validation schemas
- `@stemoria/database` - workspace dependency for database access
- `@types/bcryptjs` - TypeScript definitions

## Usage

### Basic Usage (Without Database)

```typescript
import { basicAuthOptions } from '@stemoria/auth';

// Use in Next.js API route
export default NextAuth(basicAuthOptions);
```

### With Database Integration

```typescript
import { createAuthOptions } from '@stemoria/auth';
import { prisma } from '@stemoria/database';

// Create auth options with database
const authOptions = createAuthOptions(prisma);
export default NextAuth(authOptions);
```

### Using the Default Config

```typescript
import { authOptions } from '@stemoria/auth/config';

// Uses basicAuthOptions by default
export default NextAuth(authOptions);
```

## Environment Variables Required

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

## TypeScript Support

The package includes proper TypeScript declarations for NextAuth extending the default types with:

- User interface: includes `id` and `role` properties
- Session interface: includes user `id` and `role` properties
- JWT interface: includes `id` and `role` properties
- AdapterUser interface: includes `role` property

## Current Status

- ✅ All dependencies resolved
- ✅ All missing files created
- ✅ TypeScript compilation passes
- ⚠️ Credentials provider disabled until database is fully configured
- ⚠️ Audit logging uses console.log until database is fully configured

## Next Steps for Full Integration

1. Configure the database connection properly in the workspace
2. Update providers.ts to uncomment database access code
3. Update auth-config.ts to restore database-based audit logging
4. Test authentication flows with real database