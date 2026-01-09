import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine
        .string()
        .trim()
        .minLength(2)
        .maxLength(64),
    email: vine
        .string()
        .trim()
        .unique(async (query, field) => {
          const user = await query.from('users').where('email', field).first()
          return !user
        }),
    password: vine.string().minLength(8).maxLength(512),
  })
)
