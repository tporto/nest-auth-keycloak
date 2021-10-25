import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { JwtGuard } from './jwt.guard';
import { SessionKeycloakService } from './session-keycloak.service';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(
    private sessionService: SessionService,
    private sessionKeycloak: SessionKeycloakService,
  ) {}

  // @Post('login')
  // login(@Body() body: any) {
  //   return { token: this.sessionService.login(body.username, body.password) };
  // }

  @Post('login')
  login(@Body() body: any) {
    return this.sessionKeycloak.login(body.username, body.password);
  }

  // @Role('admin')
  @UseGuards(JwtGuard)
  @Get('me')
  me(@Req() req: any) {
    console.log(req.user);

    return 'Thiago Porto';
  }
}
