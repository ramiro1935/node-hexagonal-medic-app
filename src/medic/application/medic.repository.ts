import { MedicEntity } from '../../entities/medic.entities';
import { RepositoryBase } from '../../shared/application/base.repository';

export interface MedicRepository extends RepositoryBase<MedicEntity>{
    report(): Promise<MedicEntity[]>;
}
