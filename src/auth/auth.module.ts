import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SessionController } from './session/session.controller';
import { SessionService } from './session/session.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { SessionKeycloakService } from './session/session-keycloak.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [SessionController],
  providers: [SessionService, JwtStrategyService, SessionKeycloakService],
})
export class AuthModule {}
