export const getMenuItems = (t) => [
  {
    id: '1',
    title: t('inventory'),
    description: t('manageInventory'),
    icon: require('../assets/images/inventory.jpg'),
    route: '/inventory',
  },
  {
    id: '2',
    title: t('completedOrders'),
    description: t('yourOrdersAreCompleted'),
    icon: require('../assets/images/completed_orders.jpg'),
    route: '/completedOrders',
  },
  {
    id: '3',
    title: t('settings'),
    description: t('growSmartFarmBetter'),
    icon: require('../assets/images/settings.jpg'),
    route: '/settings',
  },
  {
    id: '4',
    title: t('about'),
    description: t('exploreFeaturesForFarmers'),
    icon: require('../assets/images/inventory.jpg'),
    route: '/about',
  },
  {
    id: '5',
    title: t('helpSupport'),
    description: t('getHelpAndSupport'),
    icon: require('../assets/images/help.jpg'),
    route: '/help-support',
  },
];
