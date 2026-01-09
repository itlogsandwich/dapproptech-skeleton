import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine
        .string()
        .minLength(2)
        .maxLength(64),
    email: vine
        .string()
        .unique(async (query, field) => {
          const user = await query.from('users').where('email', field).first()
          return !user
        }),
    password: vine.string().minLength(12).maxLength(512),
  })
)
