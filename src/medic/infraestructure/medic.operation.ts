import { getRepository, Repository } from 'typeorm'
import { MedicEntity } from '../../entities/medic.entities'
import { MedicRepository } from '../application/medic.repository'
import { OperationRepository } from '../../shared/infraestructure/operation.repository'
import yenv from 'yenv'


const env = yenv()

export class MedicOperation extends OperationRepository<MedicEntity> implements MedicRepository {

    constructor(){
        super(MedicEntity)
    }
    report(): Promise<MedicEntity[]> {
        throw new Error('Method not implemented.')
    }

}
