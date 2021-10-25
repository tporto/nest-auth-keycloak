import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SessionKeycloakService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8080/auth/realms/inbolso/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: 'ceb6f0a0-4415-4192-8f92-eff2eb81e617',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );

    return data;
  }
}
