import React from "react";
//jsx를 쓰지 않은 코드
function Book(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                '이책의 이름은 ${proops.name} 입니다.'
            ),
            React.createElement(
                'h2',
                null,
                '이 책은 총${proops.numOfPage}페이지로 이뤄져 있습니다.'
            )
        ]
    )
}