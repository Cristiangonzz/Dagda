import { Observable } from 'rxjs';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';
import { IUsuarioReferenciaDomainService } from 'src/domain/services/usuario.-referencia.service.domain';

export class GetIdUsuarioReferenciaUseCase {
  constructor(
    private readonly usuarioReferenciaService: IUsuarioReferenciaDomainService<UsuarioReferenciaDomainEntity>,
  ) {}

  execute(id : string): Observable<UsuarioReferenciaDomainEntity> {
    return this.usuarioReferenciaService.findOneBy(id);
  }
}
