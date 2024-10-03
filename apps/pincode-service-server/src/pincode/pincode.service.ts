import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PincodeServiceBase } from "./base/pincode.service.base";

@Injectable()
export class PincodeService extends PincodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
