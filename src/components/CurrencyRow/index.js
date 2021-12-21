import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import { RequireLocalSvg } from "../RequireLocalSvg";
import {
  Row,
  Circle,
  NameColumn,
  Symbol,
  Name,
  StyledChart,
  PriceColumn,
  Price,
  PercentageContainer,
  Percentage,
} from "./styles";

export default function CurrencyRow({
  id,
  name,
  symbol,
  color,
  icon,
  last24Hours,
  price,
  historicalData,
}) {
  return (
    <Row>
      <Circle color={color}>
        <RequireLocalSvg width={25} height={25} asset={icon} />
      </Circle>

      <NameColumn>
        <Symbol>{symbol}</Symbol>
        <Name>{name}</Name>
      </NameColumn>

      <StyledChart data={historicalData} color={color} />

      <PriceColumn>
        <Price>
          {new Intl.NumberFormat("en-US", {
            currency: "USD",
            compactDisplay: "short",
            notation: "compact",
          }).format(price)}
        </Price>

        <PercentageContainer isNegative={last24Hours < 0}>
          <Percentage isNegative={last24Hours < 0}>{last24Hours}%</Percentage>
        </PercentageContainer>
      </PriceColumn>
    </Row>
  );
}
