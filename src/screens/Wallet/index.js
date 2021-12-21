import React, { useState, useEffect, useMemo } from "react";
import "intl";
import "intl/locale-data/jsonp/en";

import Layout from "../../components/Layout";
import {
  StyledFlatlist,
  ChartContainer,
  StyledBarChart,
  Tooltip,
  TooltipAmount,
  EarningDescription,
  EarningAmount,
  UpdatePayment,
  WithdrawButton,
  WithdrawText,
} from "./styles";
import { t } from "../../i18n/index";
import WalletService from "../../services/WalletService/service";
import Balance from "../../components/Balance";

export default function WalletScreen() {
  const [data, setData] = useState();
  const [asyncRequesting, setAsAsyncRequesting] = useState(true);
  const items = useMemo(() => {
    if (!asyncRequesting) {
      return [
        {
          key: "wallet-balance",
          render: () => (
            <Balance btc={data.balance.btc} usd={data.balance.usd} />
          ),
        },

        {
          key: "earning-chart",
          render: () => (
            <ChartContainer>
              <Tooltip>
                <TooltipAmount>
                  $
                  {new Intl.NumberFormat("en-US", {
                    currency: "USD",
                    compactDisplay: "short",
                    notation: "compact",
                  }).format(data.weekEarning)}
                </TooltipAmount>
              </Tooltip>
              <StyledBarChart data={data.earningHistory} />
            </ChartContainer>
          ),
        },

        {
          key: "earning-description",
          render: () => (
            <EarningDescription>{t("wallet.yourEarning")}</EarningDescription>
          ),
        },

        {
          key: "earning-amount",
          render: () => (
            <EarningAmount>
              $
              {new Intl.NumberFormat("en-US", {
                currency: "USD",
                compactDisplay: "short",
                notation: "compact",
              }).format(data.weekEarning)}
            </EarningAmount>
          ),
        },

        {
          key: "update-payment",
          render: () => (
            <UpdatePayment numberOfLines={2}>
              {t("wallet.updateSettings")}
            </UpdatePayment>
          ),
        },

        {
          key: "withdraw-button",
          render: () => (
            <WithdrawButton>
              <WithdrawText>{t("wallet.withdrawAll")}</WithdrawText>
            </WithdrawButton>
          ),
        },
      ];
    }

    return [];
  }, [asyncRequesting]);

  const fetchData = () => {
    async function getData() {
      const response = await WalletService.getData();
      const result = response.data;

      setData(result);
      setAsAsyncRequesting(false);
    }

    getData();
  };

  useEffect(fetchData, []);

  if (!asyncRequesting) {
    return (
      <Layout>
        <StyledFlatlist
          data={items}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => item.render()}
        />
      </Layout>
    );
  }

  return null;
}
