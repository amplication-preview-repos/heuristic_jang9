import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PincodeService } from "./pincode.service";
import { PincodeControllerBase } from "./base/pincode.controller.base";

@swagger.ApiTags("pincodes")
@common.Controller("pincodes")
export class PincodeController extends PincodeControllerBase {
  constructor(protected readonly service: PincodeService) {
    super(service);
  }
}
