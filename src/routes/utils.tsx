import { Suspense } from "react";
import FullScreenSpin from "@/components/FullScreenSpin";
import { RouteObject } from "react-router-dom";

/**
 * 给懒加载路由加loadings
 * @param routes 原始路由配置
 * @returns 新的路由配置
 */
export function withLoading(routes: RouteObject[]): RouteObject[] {
  let res: RouteObject[] = [];
  if (routes && Array.isArray(routes)) {
    res = routes.map((route: RouteObject) => {
      if (route.element) {
        route.element = (
          <Suspense fallback={<FullScreenSpin />}>{route.element}</Suspense>
        );
      }
      if (route.children) {
        withLoading(route.children);
      }
      return route;
    });
  }
  return res;
}
