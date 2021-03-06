export enum ClienteStatus {
    SemPendencias = 0,
    ComPedencias = 1,
    ComPedenciasAtrasadas = 2
}

export const GetClienteStatusLabel = (status: ClienteStatus): string => {
    switch (status){
        case ClienteStatus.ComPedencias:
            return 'Com PendĂȘncias'
        case ClienteStatus.ComPedenciasAtrasadas:
            return 'Com PendĂȘncias Atrasadas'
        default: 
            return 'Sem PendĂȘncias'
    }
}