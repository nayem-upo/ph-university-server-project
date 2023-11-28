import { z } from 'zod';

export const UserValidationSchema = z.object({
    password: z.string({ invalid_type_error: "Name must be a string" }).max(20).optional()
})
