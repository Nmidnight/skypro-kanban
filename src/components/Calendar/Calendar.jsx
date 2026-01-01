import {
  CalendarWrapper,
  CalTitle,
  CalBlock,
  CalNav,
  CalMonth,
  NavActions,
  NavAction,
  CalContent,
  CalDaysNames,
  CalDayName,
  CalCells,
  CalCell,
  CalPeriod,
  CalP,
} from "./Calendar.styled";

export function Calendar() {
  return (
    <CalendarWrapper>
      <CalTitle>Даты</CalTitle>
      <CalBlock>
        <CalNav>
          <CalMonth>Сентябрь 2023</CalMonth>
          <NavActions>
            <NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalNav>
        <CalContent>
          <CalDaysNames>
            <CalDayName>пн</CalDayName>
            <CalDayName>вт</CalDayName>
            <CalDayName>ср</CalDayName>
            <CalDayName>чт</CalDayName>
            <CalDayName>пт</CalDayName>
            <CalDayName $weekend>сб</CalDayName>
            <CalDayName $weekend>вс</CalDayName>
          </CalDaysNames>
          <CalCells>
            <CalCell $otherMonth>28</CalCell>
            <CalCell $otherMonth>29</CalCell>
            <CalCell $otherMonth>30</CalCell>
            <CalCell $celDay>31</CalCell>
            <CalCell $celDay>1</CalCell>
            <CalCell $celDay $weekend>
              2
            </CalCell>
            <CalCell $celDay $weekend>
              3
            </CalCell>
            <CalCell $celDay>4</CalCell>
            <CalCell $celDay>5</CalCell>
            <CalCell $celDay>6</CalCell>
            <CalCell $celDay>7</CalCell>
            <CalCell $celDay $current>
              8
            </CalCell>
            <CalCell $celDay $weekend $activeDay>
              9
            </CalCell>
            <CalCell $celDay $weekend>
              10
            </CalCell>
            <CalCell $celDay>11</CalCell>
            <CalCell $celDay>12</CalCell>
            <CalCell $celDay>13</CalCell>
            <CalCell $celDay>14</CalCell>
            <CalCell $celDay>15</CalCell>
            <CalCell $celDay $weekend>
              16
            </CalCell>
            <CalCell $celDay $weekend>
              17
            </CalCell>
            <CalCell $celDay>18</CalCell>
            <CalCell $celDay>19</CalCell>
            <CalCell $celDay>20</CalCell>
            <CalCell $celDay>21</CalCell>
            <CalCell $celDay>22</CalCell>
            <CalCell $celDay $weekend>
              23
            </CalCell>
            <CalCell $celDay $weekend>
              24
            </CalCell>
            <CalCell $celDay>25</CalCell>
            <CalCell $celDay>26</CalCell>
            <CalCell $celDay>27</CalCell>
            <CalCell $celDay>28</CalCell>
            <CalCell $celDay>29</CalCell>
            <CalCell $celDay $weekend>
              30
            </CalCell>
            <CalCell $otherMonth $weekend>
              1
            </CalCell>
          </CalCells>
        </CalContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <CalPeriod>
          <CalP>
            Срок исполнения: <span>09.09.23</span>
          </CalP>
        </CalPeriod>
      </CalBlock>
    </CalendarWrapper>
  );
}
