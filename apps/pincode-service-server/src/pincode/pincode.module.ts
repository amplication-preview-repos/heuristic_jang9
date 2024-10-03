import { Module } from "@nestjs/common";
import { PincodeModuleBase } from "./base/pincode.module.base";
import { PincodeService } from "./pincode.service";
import { PincodeController } from "./pincode.controller";
import { PincodeResolver } from "./pincode.resolver";

@Module({
  imports: [PincodeModuleBase],
  controllers: [PincodeController],
  providers: [PincodeService, PincodeResolver],
  exports: [PincodeService],
})
export class PincodeModule {}
