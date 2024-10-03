import * as graphql from "@nestjs/graphql";
import { PincodeResolverBase } from "./base/pincode.resolver.base";
import { Pincode } from "./base/Pincode";
import { PincodeService } from "./pincode.service";

@graphql.Resolver(() => Pincode)
export class PincodeResolver extends PincodeResolverBase {
  constructor(protected readonly service: PincodeService) {
    super(service);
  }
}
