import { ArrowRight } from './tsx/arrows/ArrowRight';
import { Check } from './tsx/controls/Check';
import { Minus } from './tsx/controls/Minus';
import { Plus } from './tsx/controls/Plus';
import { Clock } from './tsx/misc/Clock';
import { Costs } from './tsx/folloze/Costs';
import { Productivity } from './tsx/folloze/Productivity';
import { Revenue } from './tsx/folloze/Revenue';
import { Reload } from './tsx/controls/Reload';
import { FollozeArrowUp } from './tsx/folloze/FollozeArrowUp';
import { OptionCosts } from './tsx/folloze/OptionCosts';
import { OptionRevenue } from './tsx/folloze/OptionRevenue';
import { OptionProductivity } from './tsx/folloze/OptionProductivity';
import { LinearArrow } from './tsx/folloze/LinearArrow';

export interface IBasicIcon {
  stroke?: string;
  fill?: string;
}

export const icons = {
  arrow: {
    right: ArrowRight,
  },
  controls: {
    check: Check,
    minus: Minus,
    plus: Plus,
    reload: Reload,
  },
  misc: {
    clock: Clock,
  },
  folloze: {
    costs: Costs,
    revenue: Revenue,
    productivity: Productivity,
    arrowUp: FollozeArrowUp,
    optionCosts: OptionCosts,
    optionRevenue: OptionRevenue,
    optionProductivity: OptionProductivity,
    linearArrow: LinearArrow,
  },
};
