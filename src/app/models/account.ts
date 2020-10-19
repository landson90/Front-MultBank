export interface Account {
  id: number,
    numberAccount: string,
    clientEntity: {
        id: number,
        name: string,
        dateOfBirth: Date,
        cpf: string,
        usuarioEntity: {
            id: number,
            name: string,
            email: string,
            password: string,
            perfil: [],
            enabled: boolean,
            accountNonExpired: boolean,
            credentialsNonExpired: boolean,
            accountNonLocked: boolean,
            authorities: [],
            username: string,
        }
    },
    balance: number
}
