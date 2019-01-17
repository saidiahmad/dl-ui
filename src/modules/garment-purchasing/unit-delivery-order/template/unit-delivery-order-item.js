import { bindable, computedFrom } from 'aurelia-framework'
import { factories } from 'powerbi-client';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

var UomLoader = require('../../../../loader/uom-loader');

const resource = 'master/garmentProducts';
const POresource = 'garment-internal-purchase-orders';
export class UnitDeliveryOrderItem {

  fabricOptions = ['NON FABRIC', 'MAIN FABRIC', 'CONTRASS', 'INTERLINING', 'LINING', 'SPINING', 'PIPING', 'SLEEK', 'FRONTING', 'FELT', 'RIB'];
  async activate(context) {
    this.context = context;
    this.data = context.data;
    this.error = context.error;
    this.options = context.options;

    this.readOnly = this.options.readOnly || this.data.IsDisabled;
  }

  bind() {

  }

  @computedFrom("data.Id")
  get isEdit() {
    return (this.data.Id || '').toString() != '';
  }

  fabricChanged(e) {
    var selectedFabric = e.srcElement.value;
    if (selectedFabric) {
      this.data.FabricType = selectedFabric;
    } else {
      this.data.FabricType = null;;
    }
  }

  productChanged(newValue) {
    var selectedProduct = newValue;
    if (selectedProduct) {
      this.data.Product.Id = selectedProduct.ProductId;
      this.data.Product.Name = selectedProduct.ProductName;
      this.data.Product.Code = selectedProduct.ProductCode;
      this.data.Product.Remark = selectedProduct.ProductRemark;
    } else {
      this.data.Product = null;
    }
  }

  get uomLoader() {
    return UomLoader;
  }

  uomView = (uom) => {
    return uom.Unit
  }

  get product() {
    return this.data.Product.Name;
  }

  controlOptions = {
    control: {
      length: 12
    }
  };
}