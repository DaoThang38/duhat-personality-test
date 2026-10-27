(function () {
  'use strict';

  // ==========================================================================
  // 1. NGÂN HÀNG CÂU HỎI ĐA TẦNG: 48 MỆNH ĐỀ & 12 SONG ĐỀ (LA BÀN TƯ TƯỞNG)
  // ==========================================================================

  // --- A. 48 MỆNH ĐỀ NGUYÊN LÝ (12 CÂU MỖI TRỤC) ---
  const STATEMENTS_BANK = [
    // TRỤC 1: CHIẾN LƯỢC & HÀNH ĐỘNG (Tốc độ & Thực dụng vs Thận trọng & Hoàn hảo)
    { id: 's1_1', axis: 1, dir: 'A', dim: 'Chiến lược: Tốc độ hành động', text: 'Một kế hoạch hoàn hảo nhưng triển khai muộn màng luôn tệ hơn một giải pháp chắp vá được hành động ngay tức khắc.' },
    { id: 's1_2', axis: 1, dir: 'A', dim: 'Chiến lược: Thực chiến', text: 'Thà sửa sai hàng chục lần trên thực địa còn hơn mất hàng tuần chỉ để tranh cãi một phương án trên bàn giấy.' },
    { id: 's1_3', axis: 1, dir: 'A', dim: 'Chiến lược: Thực dụng ngắn hạn', text: 'Chỉ có kết quả cụ thể trong hiện tại mới chứng minh được tính đúng đắn của một ý tưởng; mọi viễn cảnh dài hạn đều là thứ yếu.' },
    { id: 's1_4', axis: 1, dir: 'A', dim: 'Chiến lược: Chớp thời cơ', text: 'Khi cơ hội bất ngờ xuất hiện, việc chớp lấy nó ngay lập tức quan trọng hơn việc cân nhắc xem nó có nằm trong lộ trình đã định hay không.' },
    { id: 's1_5', axis: 1, dir: 'A', dim: 'Chiến lược: Tư duy MVP', text: 'Một sản phẩm đưa ra thị trường nên là phiên bản vừa đủ dùng; việc trau chuốt quá kỹ lưỡng là biểu hiện của sự chậm chạp trá hình.' },
    { id: 's1_6', axis: 1, dir: 'A', dim: 'Chiến lược: Quyết đoán bất định', text: 'Trong cơn khủng hoảng, một quyết định sai lầm nhưng dứt khoát vẫn có ích hơn sự lưỡng lự để tìm phương án tối ưu.' },
    { id: 's1_7', axis: 1, dir: 'B', dim: 'Chiến lược: Nền móng dài hạn', text: 'Mọi sự cẩu thả ở khâu nền móng chắc chắn sẽ phải trả giá bằng sự sụp đổ dây chuyền trong tương lai.' },
    { id: 's1_8', axis: 1, dir: 'B', dim: 'Chiến lược: Quản trị rủi ro', text: 'Thà bỏ lỡ một cơ hội hấp dẫn còn hơn lao vào hành động khi chưa nhìn rõ toàn bộ các kịch bản tồi tệ nhất.' },
    { id: 's1_9', axis: 1, dir: 'B', dim: 'Chiến lược: Chuẩn mực tuyệt đối', text: 'Tiêu chuẩn chất lượng là ranh giới tuyệt đối không bao giờ được phép hạ thấp, dù phải đối diện với áp lực thời hạn bàn giao.' },
    { id: 's1_10', axis: 1, dir: 'B', dim: 'Chiến lược: Độ chín chắn trí tuệ', text: 'Một người làm việc sâu sắc luôn dành nhiều thời gian để định nghĩa đúng bài toán trước khi bắt tay vào viết một dòng giải pháp.' },
    { id: 's1_11', axis: 1, dir: 'B', dim: 'Chiến lược: Thể chế & Quy trình', text: 'Sự tăng trưởng bền vững luôn đòi hỏi các quy trình được văn bản hóa bài bản, chứ không thể dựa vào sự ngẫu hứng của từng cá nhân.' },
    { id: 's1_12', axis: 1, dir: 'B', dim: 'Chiến lược: Chi phí sửa sai', text: 'Việc làm lại một sản phẩm hỏng hóc tốn kém gấp nhiều lần việc làm chậm mà chắc ngay từ đầu.' },

    // TRỤC 2: QUYỀN LỰC & TỔ CHỨC (Tập trung & Kỷ luật vs Phân quyền & Đồng thuận)
    { id: 's2_1', axis: 2, dir: 'A', dim: 'Quyền lực: Lãnh đạo sắt đá', text: 'Tập thể cần một người dẫn đầu có tầm nhìn sắt đá để ra lệnh, thay vì lãng phí thời gian lấy ý kiến biểu quyết cào bằng.' },
    { id: 's2_2', axis: 2, dir: 'A', dim: 'Quyền lực: Kỷ luật thứ bậc', text: 'Kỷ luật và sự tuân thủ mệnh lệnh là xương sống tạo nên sức mạnh của một tổ chức, quan trọng hơn nhiều so với sự tự do cá nhân.' },
    { id: 's2_3', axis: 2, dir: 'A', dim: 'Quyền lực: Chấp hành triệt để', text: 'Khi mục tiêu chung đã được chốt, mọi tranh luận cá nhân phải lập tức chấm dứt để toàn bộ nguồn lực hướng về việc thi hành.' },
    { id: 's2_4', axis: 2, dir: 'A', dim: 'Quyền lực: Trách nhiệm tối cao', text: 'Quyền lực nên tập trung vào tay những người gánh vác trách nhiệm cao nhất, chứ không nên chia nhỏ để rồi không ai chịu trách nhiệm sau cùng.' },
    { id: 's2_5', axis: 2, dir: 'A', dim: 'Quyền lực: Nghiêm khắc nguyên tắc', text: 'Quy tắc sinh ra là để mọi người tuân theo; việc cho phép ngoại lệ là mầm mống dẫn đến sự tan rã của hệ thống.' },
    { id: 's2_6', axis: 2, dir: 'A', dim: 'Quyền lực: Cỗ máy chính xác', text: 'Một đội ngũ vận hành như một cỗ máy chính xác luôn chiến thắng một nhóm người tài năng nhưng vô kỷ luật.' },
    { id: 's2_7', axis: 2, dir: 'B', dim: 'Quyền lực: Tính chính danh đồng thuận', text: 'Một quyết định không nhận được sự đồng thuận tự nguyện từ những người trực tiếp thực thi sẽ chỉ sinh ra sự chống đối ngầm.' },
    { id: 's2_8', axis: 2, dir: 'B', dim: 'Quyền lực: Lãnh đạo hỗ trợ', text: 'Cấp quản lý tốt nhất là người tạo ra môi trường để nhân viên tự quyết định công việc của họ, chứ không phải người đứng chỉ tay năm ngón.' },
    { id: 's2_9', axis: 2, dir: 'B', dim: 'Quyền lực: Phản biện đa nguyên', text: 'Sự hòa thuận trong một tập thể chỉ có giá trị thực sự khi nó không được xây dựng trên sự im lặng của những người bất đồng.' },
    { id: 's2_10', axis: 2, dir: 'B', dim: 'Quyền lực: Không gian tự do', text: 'Những sáng kiến mang tính đột phá thường nảy sinh từ những góc tự do nằm ngoài tầm kiểm soát của ban lãnh đạo.' },
    { id: 's2_11', axis: 2, dir: 'B', dim: 'Quyền lực: Linh hoạt thích ứng', text: 'Quy tắc chỉ là phương tiện phục vụ con người; khi quy tắc gây cản trở sự linh hoạt, việc phá vỡ nó là điều hiển nhiên.' },
    { id: 's2_12', axis: 2, dir: 'B', dim: 'Quyền lực: Bình đẳng tổ chức', text: 'Một tổ chức phẳng nơi mọi ý kiến đều có sức nặng tương đương luôn lành mạnh hơn cấu trúc tháp quyền lực nhiều tầng.' },

    // TRỤC 3: CON NGƯỜI & QUAN HỆ (Lý tính & Sòng phẳng vs Trắc ẩn & Bình an tâm lý)
    { id: 's3_1', axis: 3, dir: 'A', dim: 'Con người: Thẳng thắn triệt để', text: 'Sự trung thực tàn nhẫn và thẳng thắn vào lỗi sai luôn nhân từ hơn một lời khen ngợi vuốt ve mang tính giả tạo.' },
    { id: 's3_2', axis: 3, dir: 'A', dim: 'Con người: Trọng nhân tài', text: 'Không có sự bất công nào lớn hơn việc đối đãi cào bằng và khen thưởng ngang nhau giữa người làm tốt và người làm dở.' },
    { id: 's3_3', axis: 3, dir: 'A', dim: 'Con người: Hiệu năng thực tế', text: 'Trong công việc, kết quả đầu ra là thước đo duy nhất; những nỗ lực hay sự vất vả không tạo ra giá trị thì không đáng được ca ngợi.' },
    { id: 's3_4', axis: 3, dir: 'A', dim: 'Con người: Quyết định cứng rắn', text: 'Việc sa thải nhanh chóng một nhân sự không đáp ứng yêu cầu là hành động tử tế nhất đối với phần còn lại của tập thể.' },
    { id: 's3_5', axis: 3, dir: 'A', dim: 'Con người: Tách bạch cảm xúc', text: 'Cảm xúc cá nhân không nên có chỗ đứng trong các cuộc thảo luận chuyên môn hoặc đánh giá hiệu quả.' },
    { id: 's3_6', axis: 3, dir: 'A', dim: 'Con người: Tự thân khẳng định', text: 'Sự công nhận phải được giành lấy bằng năng lực và đóng góp thực tế, không phải là điều nghiễm nhiên ban phát vì lòng thương hại.' },
    { id: 's3_7', axis: 3, dir: 'B', dim: 'Con người: An toàn tâm lý', text: 'Một môi trường nơi con người sợ hãi sai lầm và luôn đề phòng nhau thì sớm muộn cũng sẽ bóp nghẹt mọi khát vọng cống hiến.' },
    { id: 's3_8', axis: 3, dir: 'B', dim: 'Con người: Lòng trắc ẩn dẫn lối', text: 'Trách nhiệm đầu tiên của một người đồng hành là thấu hiểu những khó khăn ẩn sau sự sa sút của đồng đội trước khi đưa ra phán xét.' },
    { id: 's3_9', axis: 3, dir: 'B', dim: 'Con người: Tình người quý giá', text: 'Giữ gìn sự ấm áp trong các mối quan hệ con người quý giá hơn việc chiến thắng một cuộc tranh luận đúng sai trên công việc.' },
    { id: 's3_10', axis: 3, dir: 'B', dim: 'Con người: Niềm tin bao dung', text: 'Một người có thể thiếu kỹ năng nhưng có thái độ chân thành và trung kiên luôn xứng đáng được bảo bọc và trao cơ hội sửa mình.' },
    { id: 's3_11', axis: 3, dir: 'B', dim: 'Con người: Tôn trọng năng lượng', text: 'Sự thúc ép đạt chỉ số đến mức kiệt quệ thể chất và tinh thần của con người là một tội ác núp bóng thành công.' },
    { id: 's3_12', axis: 3, dir: 'B', dim: 'Con người: Nâng đỡ người yếu thế', text: 'Thành công của một tập thể được đo bằng việc thành viên yếu thế nhất được nâng đỡ tiến bộ như thế nào.' },

    // TRỤC 4: ĐỘNG LỰC & BẢN SẮC (Dấu ấn độc bản & Đơn độc vs Tận tụy vì đại cuộc & Mắt xích)
    { id: 's4_1', axis: 4, dir: 'A', dim: 'Bản sắc: Khao khát độc bản', text: 'Tôi thà thất bại với một cách làm hoàn toàn do mình sáng tạo, còn hơn thành công bằng việc đi lại lối mòn người khác đã vẽ sẵn.' },
    { id: 's4_2', axis: 4, dir: 'A', dim: 'Bản sắc: Tôn vinh cá nhân dị biệt', text: 'Những bước tiến vĩ đại nhất của nhân loại luôn do những cá nhân dị biệt dám chống lại số đông tạo nên, chứ không đến từ các ủy ban hòa giải.' },
    { id: 's4_3', axis: 4, dir: 'A', dim: 'Bản sắc: Giữ vững căn tính', text: 'Nếu công việc chỉ biến tôi thành một mắt xích vô danh có thể bị thay thế bất kỳ lúc nào, tôi sẽ rời đi để tìm chân trời riêng.' },
    { id: 's4_4', axis: 4, dir: 'A', dim: 'Bản sắc: Không thỏa hiệp tầm thường', text: 'Sự thỏa hiệp để làm vừa lòng tất cả mọi người là con đường nhanh nhất dẫn đến sự tầm thường và biến chất.' },
    { id: 's4_5', axis: 4, dir: 'A', dim: 'Bản sắc: Dấu ấn tác giả', text: 'Tôi cần được trao trọn vẹn quyền tự do thể hiện gu thẩm mỹ và phong cách cá nhân trong sản phẩm do chính tay mình tạo ra.' },
    { id: 's4_6', axis: 4, dir: 'A', dim: 'Bản sắc: Đơn độc tiên phong', text: 'Sự cô độc của một người đi trước thời đại luôn đáng tự hào hơn sự ấm áp nhưng an phận của đám đông.' },
    { id: 's4_7', axis: 4, dir: 'B', dim: 'Bản sắc: Điểm tựa đại cuộc', text: 'Giá trị lớn nhất của một cá nhân là biết hạ bớt cái tôi của mình xuống để trở thành một điểm tựa vững chắc cho đại cuộc.' },
    { id: 's4_8', axis: 4, dir: 'B', dim: 'Bản sắc: Sứ mệnh trường tồn', text: 'Không có vinh quang nào bền vững hơn việc cùng chung tay xây dựng nên một công trình tập thể trường tồn qua thời gian.' },
    { id: 's4_9', axis: 4, dir: 'B', dim: 'Bản sắc: Cống hiến vô danh', text: 'Một người thầm lặng hoàn thành xuất sắc công việc tại vị trí khiêm nhường của mình đáng kính hơn một ngôi sao luôn tìm cách chiếm lấy ánh đèn sân khấu.' },
    { id: 's4_10', axis: 4, dir: 'B', dim: 'Bản sắc: Trung kiên gian khó', text: 'Sự trung thành và gắn bó với sứ mệnh chung trong lúc gian khó là phẩm chất cao quý nhất của một người đồng hành.' },
    { id: 's4_11', axis: 4, dir: 'B', dim: 'Bản sắc: Đặt cái chung lên trên', text: 'Việc phô trương dấu ấn cá nhân khi chưa đóng góp gì cho sự ổn định của cả đội là sự ích kỷ thiếu trưởng thành.' },
    { id: 's4_12', axis: 4, dir: 'B', dim: 'Bản sắc: Dấn thân hậu trường', text: 'Khi tổ chức cần, tôi sẵn sàng nhận những phần việc hậu trường ít người biết đến mà không cần ai phải vinh danh.' }
  ];

  // --- B. 12 SONG ĐỀ CÂN NÃO (DILEMMAS: VẾ A VS VẾ B) ---
  const DILEMMAS_BANK = [
    {
      id: 'd1', primaryAxis: 1, secondaryAxis: 2,
      title: 'Về Quyết Sách Đột Phá',
      wingA: 'Một người chỉ huy tài ba, độc đoán nhưng quyết định chớp nhoáng và luôn đưa cả nhóm tới đích đến thắng lợi.',
      wingB: 'Một tập thể dân chủ, đồng thuận thảo luận kỹ càng nhưng chấp nhận tiến chậm và có nguy cơ bỏ lỡ thời cơ vàng.',
      labelA: 'Chỉ huy tài ba, tốc độ', labelB: 'Dân chủ, đồng thuận'
    },
    {
      id: 'd2', primaryAxis: 1, secondaryAxis: 3,
      title: 'Về Chuẩn Mực Sản Phẩm',
      wingA: 'Bảo vệ chất lượng sản phẩm đến mức hoàn hảo tuyệt đối, bất chấp việc phải đẩy áp lực lên đồng đội đến mức gay gắt.',
      wingB: 'Bảo vệ sự bình an tâm lý và năng lượng cho đồng đội, dù phải chấp nhận một sản phẩm ra mắt ở mức độ vừa phải.',
      labelA: 'Hoàn hảo sản phẩm', labelB: 'Bình an đồng đội'
    },
    {
      id: 'd3', primaryAxis: 4, secondaryAxis: 2,
      title: 'Về Bản Sắc Trong Bộ Máy',
      wingA: 'Là một ngọn lửa sáng tạo độc lập, tự do bứt phá dù phải chấp nhận đứng ngoài kỷ luật và sự bảo bọc của tập thể.',
      wingB: 'Là một mắt xích vững chãi trong cỗ máy lớn, tận tụy vận hành vì sự phồn vinh lâu dài của toàn thể cộng đồng.',
      labelA: 'Ngọn lửa độc lập', labelB: 'Mắt xích cỗ máy'
    },
    {
      id: 'd4', primaryAxis: 3, secondaryAxis: 1,
      title: 'Về Đạo Đức Đánh Giá Con Người',
      wingA: 'Sòng phẳng tuyệt đối: Thưởng lớn cho người làm tốt và thẳng thắn đào thải người yếu kém để tối đa hóa hiệu năng.',
      wingB: 'Bao dung nhân từ: Kiên nhẫn nâng đỡ và bảo bọc người yếu thế, dù điều đó làm chậm tiến độ chung của toàn đội.',
      labelA: 'Sòng phẳng hiệu năng', labelB: 'Bao dung nâng đỡ'
    },
    {
      id: 'd5', primaryAxis: 1, secondaryAxis: 1,
      title: 'Về Kế Hoạch vs Trực Giác',
      wingA: 'Tuyệt đối tuân thủ lộ trình đã được nghiên cứu bài bản, không để sự biến động nhất thời của thị trường làm chệch hướng.',
      wingB: 'Sẵn sàng vứt bỏ toàn bộ kế hoạch cũ ngay trong đêm để xoay trục chớp lấy một nhu cầu mới phát sinh của thực tế.',
      labelA: 'Kiên định lộ trình', labelB: 'Xoay trục linh hoạt'
    },
    {
      id: 'd6', primaryAxis: 2, secondaryAxis: 2,
      title: 'Về Bản Chất Quyền Lực',
      wingA: 'Trật tự xã hội bền vững nhất khi quyền lực tập trung vào tay một nhóm tinh hoa có đủ trí tuệ và sự kiên định.',
      wingB: 'Trật tự xã hội bền vững nhất khi quyền lực được phân tán rộng rãi cho từng cá nhân tự do giám sát và quyết định.',
      labelA: 'Nhóm tinh hoa dẫn dắt', labelB: 'Phân quyền tự do'
    },
    {
      id: 'd7', primaryAxis: 3, secondaryAxis: 3,
      title: 'Về Sự Thẳng Thắn Trong Giao Tiếp',
      wingA: 'Nói thẳng sự thật trần trụi ngay tại chỗ, dù lời nói đó có thể làm người nghe tổn thương và rạn nứt mối quan hệ.',
      wingB: 'Lựa lời nói giảm nói tránh để giữ hòa khí, dù sự việc có thể không được giải quyết rốt ráo ngay lập tức.',
      labelA: 'Sự thật trần trụi', labelB: 'Giữ gìn hòa khí'
    },
    {
      id: 'd8', primaryAxis: 4, secondaryAxis: 4,
      title: 'Về Vinh Quang vs Trách Nhiệm',
      wingA: 'Khát khao để lại một kiệt tác mang đậm dấu ấn tên tuổi cá nhân được người đời chiêm ngưỡng và ngưỡng mộ.',
      wingB: 'Hài lòng với việc trở thành một bệ phóng thầm lặng giúp những người xung quanh tỏa sáng và thành công.',
      labelA: 'Kiệt tác mang tên mình', labelB: 'Bệ phóng thầm lặng'
    },
    {
      id: 'd9', primaryAxis: 1, secondaryAxis: 4,
      title: 'Về Đổi Mới vs Kế Thừa',
      wingA: 'Dám đập đi xây lại từ đầu, vứt bỏ toàn bộ di sản cũ để tạo nên một bước nhảy vọt chưa từng có tiền lệ.',
      wingB: 'Kiên nhẫn bảo tồn và chắt lọc những tinh hoa đã được thời gian kiểm chứng qua nhiều thế hệ đi trước.',
      labelA: 'Đập đi xây lại', labelB: 'Kế thừa tinh hoa'
    },
    {
      id: 'd10', primaryAxis: 3, secondaryAxis: 2,
      title: 'Về Tính Trung Thực vs Sĩ Khí',
      wingA: 'Công khai toàn bộ dữ liệu khó khăn cho tất cả nhân viên được biết, tôn trọng quyền được biết sự thật của mỗi người.',
      wingB: 'Giấu kín các tin tức tiêu cực để bảo toàn sĩ khí và tránh gây ra sự hoang mang không cần thiết cho số đông.',
      labelA: 'Minh bạch sự thật', labelB: 'Bảo toàn sĩ khí'
    },
    {
      id: 'd11', primaryAxis: 2, secondaryAxis: 4,
      title: 'Về Tự Do vs Quy Trình',
      wingA: 'Cho phép mỗi nhân sự được tự do chọn cách làm riêng, miễn là họ mang về kết quả mong đợi.',
      wingB: 'Bắt buộc mọi người phải thực hiện đúng từng bước quy trình chuẩn đã được tối ưu hóa để đảm bảo sự đồng bộ.',
      labelA: 'Tự do phương pháp', labelB: 'Quy chuẩn đồng bộ'
    },
    {
      id: 'd12', primaryAxis: 3, secondaryAxis: 4,
      title: 'Về Động Lực Làm Việc',
      wingA: 'Làm việc trước hết vì niềm vui, sự gắn kết thân tình và cảm giác được thuộc về một gia đình ấm áp.',
      wingB: 'Làm việc trước hết vì thử thách trí tuệ đỉnh cao, cơ hội khẳng định bản lĩnh cá nhân và chinh phục đỉnh cao mới.',
      labelA: 'Gia đình ấm áp', labelB: 'Chinh phục đỉnh cao'
    }
  ];

  // --- C. CÂU HỎI ĐÀO SÂU CĂN CƠ ("VÌ SAO?") ---
  const REASONING_OPTIONS = [
    { key: 'utilitarian', label: '⚡ Chủ nghĩa Thực dụng / Hiệu năng', desc: 'Vì thế giới chỉ đánh giá qua kết quả thực tế tạo ra; mọi lý lẽ hoa mỹ không tạo ra giá trị đều là vô nghĩa.' },
    { key: 'deontology', label: '⚖️ Đạo đức Nghĩa vụ & Chuẩn mực', desc: 'Vì có những nguyên tắc đạo đức và quy chuẩn bất biến; đúng là đúng, sai là sai, không thể đánh đổi vì lợi ích trước mắt.' },
    { key: 'humanism', label: '🌱 Lòng Trắc ẩn & Nhân bản', desc: 'Vì con người luôn là mục đích tự thân, không bao giờ là phương tiện hay công cụ phục vụ cho bất kỳ cỗ máy nào.' },
    { key: 'structuralism', label: '🏛️ Trật tự & Kỷ luật Hệ thống', desc: 'Vì không có một trật tự kỷ luật vững chắc thì mọi tài năng cá nhân sẽ chỉ tạo ra sự hỗn loạn và tự triệt tiêu lẫn nhau.' },
    { key: 'existentialism', label: '🔥 Tự do & Căn tính Độc bản', desc: 'Vì nếu đánh mất cái tôi độc bản và quyền tự quyết, sự tồn tại của con người sẽ chỉ là cái bóng sao chép của kẻ khác.' }
  ];

  // --- D. THƯ VIỆN 8 HÌNH MẪU HOA ĐẠI DIỆN 4 TRỤC ---
  const FLOWER_LIBRARY = {
    'huong_duong': {
      id: 'huong_duong',
      flowerName: 'Hoa Hướng Dương',
      emoji: '🌻',
      tagline: 'Người Tiên Phong Hệ Thống & Cam Kết Sắt Đá',
      profile: { axis1: 0.5, axis2: 1.5, axis3: 0.5, axis4: -0.5 },
      coreVal: 'Tín · Trọng cam kết & Kỷ luật',
      leadership: 'Tập trung quyết đoán (Chỉ huy)',
      thinking: 'Hệ thống (Bức tranh toàn cảnh)',
      portrait: 'Bạn coi trọng cam kết và sự tin cậy tuyệt đối trong quá trình phối hợp. Khi đối mặt bài toán khó, bạn tự xác lập hướng đi rõ ràng dựa trên chuyên môn vững vàng, dám đứng mũi chịu sào và luôn tính toán tác động dây chuyền giữa các khâu.',
      strength: 'Giữ cho cả nhóm luôn đúng hạn cam kết, dự báo trước rủi ro và điều hướng công việc có lớp lang bài bản.',
      misunderstood: 'Sự kiên định bám cam kết cũ đôi khi có thể bị đồng nghiệp hiểu nhầm là chậm linh hoạt khi hoàn cảnh đột ngột thay đổi.',
      collabTips: [
        'Thống nhất đầu ra (output) và quyền tự quyết rõ ràng ngay từ đầu.',
        'Cung cấp bức tranh toàn cảnh khi cần bạn đưa ra quyết định mới.',
        'Báo sớm cho bạn ngay khi có dữ liệu đầu vào bị trễ hạn.'
      ]
    },
    'do_quyen': {
      id: 'do_quyen',
      flowerName: 'Hoa Đỗ Quyên',
      emoji: '🌺',
      tagline: 'Tia Chớp Bứt Phá & Thực Dụng',
      profile: { axis1: 1.8, axis2: 0.8, axis3: 0.8, axis4: 0.8 },
      coreVal: 'Tốc · Tốc độ & Chớp thời cơ',
      leadership: 'Độc đoán thiên tài (Hành động)',
      thinking: 'Thực dụng (Đi thẳng vào kết quả)',
      portrait: 'Bạn hành động cực nhanh, không ngại ra quyết định dứt khoát để chớp thời cơ. Bạn lược bỏ mọi quy trình rườm rà để tập trung thẳng vào điều cốt lõi tạo ra giá trị nhanh nhất trên thị trường.',
      strength: 'Phá vỡ các điểm nghẽn, tạo động lực bứt phá và đưa giải pháp ra thị trường trong thời gian ngắn kỷ lục.',
      misunderstood: 'Tốc độ quá nhanh đôi khi khiến đồng nghiệp chưa kịp theo kịp, dễ hiểu nhầm bạn nóng vội.',
      collabTips: [
        'Trao đổi ngắn gọn, đi thẳng vào kết quả cần đạt được.',
        'Cho bạn không gian tự do xử lý linh hoạt.'
      ]
    },
    'cam_tu_cau': {
      id: 'cam_tu_cau',
      flowerName: 'Hoa Cẩm Tú Cầu',
      emoji: '🌸',
      tagline: 'Bậc Thầy Kết Nối Hệ Sinh Thái & Đồng Thuận',
      profile: { axis1: -0.8, axis2: -1.8, axis3: -1.0, axis4: -0.8 },
      coreVal: 'Trí & Hòa · Kết nối đa chiều',
      leadership: 'Hệ sinh thái (Đồng thuận tự nguyện)',
      thinking: 'Đa chiều (Lắng nghe & Bổ trợ)',
      portrait: 'Bạn chủ động tìm đúng người ở các nhóm khác nhau, kết nối các năng lực bổ trợ để giải quyết vấn đề chung, đồng thời luôn dùng dữ liệu và giả thuyết đã kiểm chứng để đảm bảo lời hứa với đối tác.',
      strength: 'Tạo dựng mạng lưới hợp tác đa chiều cực kỳ uy tín và giải quyết vấn đề dựa trên sự đồng thuận bền vững.',
      misunderstood: 'Đòi hỏi tham vấn nhiều bên có thể khiến người khác cảm thấy bạn hơi cẩn trọng.',
      collabTips: [
        'Trình bày đề xuất kèm số liệu đo lường cụ thể.',
        'Tận dụng thế mạnh kết nối của bạn để làm cầu nối giữa các phòng ban.'
      ]
    },
    'sen_da': {
      id: 'sen_da',
      flowerName: 'Hoa Sen Đá',
      emoji: '🪴',
      tagline: 'Kiến Trúc Sư Nền Tảng & Quy Trình Bền Vững',
      profile: { axis1: -1.8, axis2: 0.5, axis3: 0.5, axis4: -1.8 },
      coreVal: 'Tâm · Chuẩn mực & Bền bỉ',
      leadership: 'Nền tảng (Xây cơ chế tự vận hành)',
      thinking: 'Hệ thống (Quy trình chuẩn mực)',
      portrait: 'Bạn luôn hết lòng vì chất lượng công việc và trải nghiệm của người nhận. Bạn thích tạo ra hướng dẫn, công cụ, checklist dùng chung để đồng nghiệp tự xử lý mượt mà mà không phải phụ thuộc vào ai.',
      strength: 'Xây dựng nền tảng vững chắc, bền bỉ và chuẩn mực cho tập thể vận hành dài hạn.',
      misunderstood: 'Mong muốn quy trình hóa mọi thứ đôi khi có thể bị xem là rườm rà đối với những việc cần xử lý gấp.',
      collabTips: [
        'Cùng bạn thiết lập các mốc kiểm tra định kỳ thay vì theo dõi vi mô.',
        'Ghi nhận sự tận tâm thầm lặng của bạn đối với thành công của đội ngũ.'
      ]
    },
    'sen_trang': {
      id: 'sen_trang',
      flowerName: 'Hoa Sen Trắng',
      emoji: '🪷',
      tagline: 'Người Gìn Giữ Lòng Trắc Ẩn & Nhân Bản',
      profile: { axis1: -0.8, axis2: -0.8, axis3: -1.8, axis4: -0.8 },
      coreVal: 'Nhân · Thấu cảm & Bảo bọc',
      leadership: 'Bảo bọc & Phục vụ (Servant)',
      thinking: 'Nhân bản (Con người là trung tâm)',
      portrait: 'Bạn đặt con người và sự bình an tâm lý lên trên mọi chỉ số số lượng. Bạn tin rằng một tập thể vững mạnh thực sự là nơi thành viên yếu thế nhất cũng cảm thấy an toàn và được trao cơ hội vươn lên.',
      strength: 'Chữa lành, nuôi dưỡng lòng trung thành sâu sắc và tạo ra môi trường làm việc nhân văn không sợ hãi sai lầm.',
      misunderstood: 'Đôi khi ngần ngại đưa ra các quyết định kỷ luật cứng rắn vì sợ làm tổn thương người khác.',
      collabTips: [
        'Tôn trọng không gian cảm xúc và chia sẻ chân thành với bạn.',
        'Hỗ trợ bạn ở các khâu cần quyết định sa thải hoặc cắt giảm sòng phẳng.'
      ]
    },
    'xuong_rong': {
      id: 'xuong_rong',
      flowerName: 'Hoa Xương Rồng',
      emoji: '🌵',
      tagline: 'Chiến Binh Độc Bản & Phản Biện Gai Góc',
      profile: { axis1: 0.8, axis2: -0.8, axis3: 1.8, axis4: 1.8 },
      coreVal: 'Dũng & Chân · Trung thực tàn nhẫn',
      leadership: 'Tiên phong độc lập',
      thinking: 'Phản biện sắc bén (Chất vấn sự thật)',
      portrait: 'Bạn ghét sự đạo đức giả và sự khen ngợi vuốt ve vô nghĩa. Bạn sẵn sàng nói thẳng vào sự thật trần trụi dù mất lòng, và luôn tự hào với bản sắc độc lập không chịu hòa tan vào bất kỳ khuôn khổ nào.',
      strength: 'Vạch trần điểm mù của hệ thống, bảo vệ sự sòng phẳng và không bao giờ thỏa hiệp với sự tầm thường.',
      misunderstood: 'Lời nói thẳng thắn có thể khiến những người nhạy cảm cảm thấy bị công kích cá nhân.',
      collabTips: [
        'Đi thẳng vào vấn đề bằng lý lẽ logic, không vòng vo cảm xúc.',
        'Tôn trọng không gian tự chủ tối đa của bạn.'
      ]
    },
    'oai_huong': {
      id: 'oai_huong',
      flowerName: 'Hoa Oải Hương',
      emoji: '🪻',
      tagline: 'Nhà Chiến Lược Trầm Mặc & Tinh Hoa',
      profile: { axis1: -1.8, axis2: 0.8, axis3: 0.0, axis4: 0.8 },
      coreVal: 'Tuệ · Tầm nhìn dài hạn & Chiêm nghiệm',
      leadership: 'Dẫn dắt bằng trí tuệ & Tầm nhìn',
      thinking: 'Chiến lược trừu tượng',
      portrait: 'Bạn luôn lùi lại một bước để quan sát toàn cục trước khi đưa ra nhận định. Bạn không bị cuốn vào những biến động nhất thời mà kiên nhẫn xây dựng các giải pháp có tầm nhìn 5-10 năm tới.',
      strength: 'Định hình chiến lược đường dài, phát hiện các xu hướng ngầm mà số đông bỏ sót.',
      misunderstood: 'Sự trầm mặc đôi khi bị hiểu lầm là xa cách hoặc thiếu nhiệt huyết thực chiến.',
      collabTips: [
        'Dành cho bạn thời gian suy ngẫm trước khi đòi hỏi câu trả lời chốt.',
        'Đặt bạn vào vai trò cố vấn chiến lược và thiết kế kiến trúc.'
      ]
    },
    'cuc_vang': {
      id: 'cuc_vang',
      flowerName: 'Hoa Cúc Vàng',
      emoji: '🌼',
      tagline: 'Trụ Cột Tận Tụy & Mắt Xích Trung Kiên',
      profile: { axis1: -0.8, axis2: 0.8, axis3: -0.8, axis4: -1.8 },
      coreVal: 'Nghĩa · Tận tụy vì đại cuộc',
      leadership: 'Điểm tựa hậu phương vững chắc',
      thinking: 'Cần mẫn & Thực tế',
      portrait: 'Bạn là người sẵn sàng nhận những phần việc hậu trường ít người biết đến vì bạn hiểu rằng không có hậu phương vững chắc thì tiền tuyến không thể chiến thắng. Bạn đặt sự thành công của cả đội lên trên cái tôi cá nhân.',
      strength: 'Sự kiên định, độ tin cậy tuyệt đối trong khủng hoảng và lòng trung thành phụng sự sứ mệnh.',
      misunderstood: 'Quá khiêm nhường có thể khiến những đóng góp to lớn của bạn bị người ngoài coi là hiển nhiên.',
      collabTips: [
        'Chủ động ghi nhận và vinh danh những nỗ lực thầm lặng của bạn.',
        'Không để người khác dồn việc hoặc lợi dụng sự tận tụy của bạn.'
      ]
    }
  };

  // ==========================================================================
  // 2. STATE MANAGEMENT & BỘ MÁY THÍCH ỨNG (ADAPTIVE ENGINE)
  // ==========================================================================

  const state = {
    activeScreen: 'screen-inbox',
    onboardingDone: false,
    completed: false,

    // Adaptive Queue
    activeQueue: [], // Danh sách câu hỏi hiện tại
    currentQueueIndex: 0,
    currentTier: 1, // 1: Core (12), 2: Adaptive Branch (24), 3: Deep (36)
    targetTotal: 12, // Ban đầu là 12, tự mở rộng lên 24 hoặc 36!
    adaptiveTriggered: false,

    // Scores
    scores: {
      axis1: 0, // Tốc độ (+) vs Hoàn hảo (-)
      axis2: 0, // Tập trung (+) vs Phân quyền (-)
      axis3: 0, // Sòng phẳng (+) vs Trắc ẩn (-)
      axis4: 0  // Bản sắc độc bản (+) vs Đại cuộc (-)
    },
    counts: { axis1: 0, axis2: 0, axis3: 0, axis4: 0 },
    answers: {},
    reasoningAnswers: {},

    // Matched Archetypes
    matchedFlowerKey: 'huong_duong',
    hybridFlowerKey: null,
    confidenceScore: 0.85,
    topRankings: []
  };

  // Thang đo 5 mức độ Likert
  const likertScaleOptions = [
    { level: 5, glyph: '🟢', label: 'Rất đồng tình', quickLabel: 'Rất đồng ý', score: 2, cssClass: 'lvl-5', color: '#15803D' },
    { level: 4, glyph: '🟢', label: 'Đồng tình', quickLabel: 'Đồng ý', score: 1, cssClass: 'lvl-4', color: '#16A34A' },
    { level: 3, glyph: '⚪', label: 'Trung lập', quickLabel: 'Trung lập', score: 0, cssClass: 'lvl-3', color: '#64748B' },
    { level: 2, glyph: '🔴', label: 'Không đồng tình', quickLabel: 'Không đồng ý', score: -1, cssClass: 'lvl-2', color: '#EA580C' },
    { level: 1, glyph: '🔴', label: 'Rất không đồng tình', quickLabel: 'Rất phản đối', score: -2, cssClass: 'lvl-1', color: '#DC2626' }
  ];

  // Thang đo 5 mức độ Song đề (Dilemma Balance)
  const dilemmaScaleOptions = [
    { step: 'A2', weight: 2, glyph: '🔵', label: 'Nghiêng hẳn về Vế A', quickLabel: 'Vế A hoàn toàn', cssClass: 'd-step-a2', color: '#0284C7' },
    { step: 'A1', weight: 1, glyph: '🔵', label: 'Nghiêng nhẹ Vế A', quickLabel: 'Nghiêng A', cssClass: 'd-step-a1', color: '#38BDF8' },
    { step: 'MID', weight: 0, glyph: '⚖️', label: 'Cân nhau, khó chọn', quickLabel: '⚖️ Cân nhau', cssClass: 'd-step-mid', color: '#94A3B8' },
    { step: 'B1', weight: -1, glyph: '🟣', label: 'Nghiêng nhẹ Vế B', quickLabel: 'Nghiêng B', cssClass: 'd-step-b1', color: '#A855F7' },
    { step: 'B2', weight: -2, glyph: '🟣', label: 'Nghiêng hẳn về Vế B', quickLabel: 'Vế B hoàn toàn', cssClass: 'd-step-b2', color: '#7C3AED' }
  ];

  // ==========================================================================
  // 3. KHỞI TẠO HÀNG ĐỢI CÂU HỎI BAN ĐẦU (TẦNG 1: 12 CÂU CỐT LÕI)
  // ==========================================================================

  function initializeCoreQueue() {
    // 8 Mệnh đề (2 câu/trục) + 4 Song đề (1 câu/trục)
    state.activeQueue = [
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's1_1') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's1_7') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd1') }, // Trục 1 vs 2
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's2_1') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's2_9') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd2') }, // Trục 1 vs 3
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's3_1') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's3_7') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd3') }, // Trục 4 vs 2
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's4_1') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's4_7') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd4') }  // Trục 3 vs 1
    ];
    state.targetTotal = 12;
    state.currentQueueIndex = 0;
    state.currentTier = 1;
    state.adaptiveTriggered = false;
  }

  // ==========================================================================
  // 4. DOM REFERENCES
  // ==========================================================================

  const els = {
    phoneClock: document.getElementById('phone-clock'),
    screenInbox: document.getElementById('screen-inbox'),
    screenChat: document.getElementById('screen-chat'),
    screenFlowerProfile: document.getElementById('screen-flower-profile'),
    messageStreamContainer: document.getElementById('message-stream-container'),
    typingIndicatorBar: document.getElementById('typing-indicator-bar'),
    chatQuickChipsBar: document.getElementById('chat-quick-chips-bar'),
    inputMessage: document.getElementById('input-message'),
    btnSubmitMessage: document.getElementById('btn-submit-message'),
    trackerCurrentLabel: document.getElementById('tracker-current-label'),
    trackerPercentLabel: document.getElementById('tracker-percent-label'),
    trackerFillBar: document.getElementById('tracker-fill-bar'),
    bannerStartLikert: document.getElementById('banner-start-likert'),
    convItemAi: document.getElementById('conv-item-ai'),
    btnBackInbox: document.getElementById('btn-back-inbox'),
    btnBackFromFlower: document.getElementById('btn-back-from-flower'),
    btnViewProfileDirect: document.getElementById('btn-view-profile-direct'),
    btnToggleTheme: document.getElementById('btn-toggle-theme'),
    btnRestartAssessment: document.getElementById('btn-restart-assessment'),

    // Group Chat & Garden
    screenGroupChat: document.getElementById('screen-group-chat'),
    screenGarden: document.getElementById('screen-garden'),
    convItemGroup: document.getElementById('conv-item-group'),
    btnShareToGroup: document.getElementById('btn-share-to-group'),
    btnOpenGardenView: document.getElementById('btn-open-garden-view'),
    btnBackFromGroup: document.getElementById('btn-back-from-group'),
    btnBackFromGarden: document.getElementById('btn-back-from-garden'),
    btnGroupToGarden: document.getElementById('btn-group-to-garden'),
    btnGardenToGroup: document.getElementById('btn-garden-to-group'),
    tabGarden: document.getElementById('tab-garden'),
    tabMessages: document.getElementById('tab-messages'),
    groupMessageStream: document.getElementById('group-message-stream'),
    groupSharedCardContainer: document.getElementById('group-shared-card-container'),
    profileSynergyTabs: document.getElementById('profile-synergy-tabs'),
    profileSynergyContent: document.getElementById('profile-synergy-content'),
    gardenSynergyDetail: document.getElementById('garden-synergy-detail'),
    gardenSynergyTitle: document.getElementById('garden-synergy-title'),
    groupSnippetPreview: document.getElementById('group-snippet-preview'),
    groupUnreadBadge: document.getElementById('group-unread-badge'),
    inputGroupMessage: document.getElementById('input-group-message'),
    btnSendGroupMessage: document.getElementById('btn-send-group-message'),

    // Profile fields
    flowerCardEmoji: document.getElementById('flower-card-emoji'),
    flowerCardName: document.getElementById('flower-card-name'),
    flowerCardTagline: document.getElementById('flower-card-tagline'),
    dimCoreVal: document.getElementById('dim-core-val'),
    dimLeadership: document.getElementById('dim-leadership'),
    dimThinking: document.getElementById('dim-thinking'),
    flowerPortraitText: document.getElementById('flower-portrait-text'),
    flowerStrengthBox: document.getElementById('flower-strength-box'),
    flowerMisunderstoodText: document.getElementById('flower-misunderstood-text'),
    flowerCollabTips: document.getElementById('flower-collab-tips')
  };

  // Clock
  function updatePhoneClock() {
    const now = new Date();
    els.phoneClock.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
  setInterval(updatePhoneClock, 1000);
  updatePhoneClock();

  // Navigation
  function navigateTo(screenId) {
    state.activeScreen = screenId;
    const allScreens = [
      els.screenInbox, els.screenChat, els.screenFlowerProfile, 
      els.screenGroupChat, els.screenGarden
    ];
    allScreens.forEach(s => s && s.classList.remove('active'));
    document.getElementById(screenId)?.classList.add('active');

    if (els.tabGarden && els.tabMessages) {
      if (screenId === 'screen-garden') {
        els.tabGarden.classList.add('active');
        els.tabMessages.classList.remove('active');
        renderGardenSynergy('sen_da');
      } else if (screenId === 'screen-inbox') {
        els.tabMessages.classList.add('active');
        els.tabGarden.classList.remove('active');
      }
    }

    if (screenId === 'screen-flower-profile') {
      renderProfileSynergy('sen_da');
    }
    if (screenId === 'screen-chat') scrollChatToBottom();
  }

  function scrollChatToBottom() {
    setTimeout(() => {
      if (els.messageStreamContainer) {
        els.messageStreamContainer.scrollTop = els.messageStreamContainer.scrollHeight;
      }
    }, 60);
  }

  function showTypingIndicator(show) {
    if (els.typingIndicatorBar) {
      els.typingIndicatorBar.classList.toggle('hidden', !show);
      if (show) scrollChatToBottom();
    }
  }

  function updateProgressBar(idx) {
    const total = state.targetTotal;
    const current = Math.min(idx, total);
    const percent = Math.round((current / total) * 100);

    const tierLabel = state.currentTier === 1 
      ? 'Tầng 1: Cốt lõi' 
      : (state.currentTier === 2 ? 'Tầng 2: Thích ứng' : 'Tầng 3: Chuyên sâu');

    els.trackerCurrentLabel.textContent = `${tierLabel} · Câu ${current} / ${total}`;
    els.trackerPercentLabel.textContent = `${percent}%`;
    els.trackerFillBar.style.width = `${percent}%`;
  }

  // ==========================================================================
  // 5. ONBOARDING NARRATIVE
  // ==========================================================================

  function startLikertAssessment() {
    navigateTo('screen-chat');
    if (!state.onboardingDone && els.messageStreamContainer.children.length === 0) {
      initializeCoreQueue();
      renderOnboarding();
    }
  }

  function renderOnboarding() {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const welcomeHtml = `
      <div class="message-row others">
        <div class="msg-sender-avatar">🌸</div>
        <div class="msg-bubble">
          <div>Quak quak! 🦆 Chào bạn, mình là <strong>Duhat AI Adaptive Engine</strong>.</div>
          <p style="margin: 6px 0;">Chào mừng bạn đến với hệ thống trắc nghiệm giá trị & bản sắc công sở đa tầng, lấy cảm hứng từ triết lý <strong>La bàn Tư tưởng</strong>.</p>
          
          <div style="background: rgba(238, 242, 255, 0.8); border-left: 3px solid #6366F1; padding: 8px 10px; border-radius: 6px; margin: 8px 0; font-size: 0.84rem; color: #3730A3; line-height: 1.45;">
            🧭 <strong>Cơ chế Thích ứng Thông minh (Adaptive Testing):</strong><br>
            • Không dừng lại ở 10 câu cố định. Bạn bắt đầu với <strong>12 câu cốt lõi</strong>.<br>
            • Đan cài giữa <strong>Mệnh đề nguyên lý</strong> và <strong>Song đề cân não (Vế A vs Vế B)</strong>.<br>
            • Tùy vào mức độ phân hóa của bạn, AI sẽ tự động rẽ nhánh mở rộng lên <strong>24 hoặc 36 câu</strong> để bóc tách chính xác bản sắc độc bản của bạn!
          </div>

          <div>Hãy trả lời theo trực giác và lương tâm nghề nghiệp chân thực nhất của bạn nhé!</div>
          <div class="msg-meta-row"><span>${timeStr}</span></div>
        </div>
      </div>
    `;

    els.messageStreamContainer.insertAdjacentHTML('beforeend', welcomeHtml);
    scrollChatToBottom();
    renderOnboardingChips();
  }

  function renderOnboardingChips() {
    els.chatQuickChipsBar.className = 'chat-quick-chips-bar';
    els.chatQuickChipsBar.innerHTML = `
      <button class="chat-chip-btn accent-chip" id="chip-start-adaptive">
        🚀 Bắt đầu 12 Câu Cốt Lõi!
      </button>
      <button class="chat-chip-btn" id="chip-learn-method">
        ❓ Triết lý câu hỏi vận hành thế nào?
      </button>
    `;

    els.chatQuickChipsBar.querySelector('#chip-start-adaptive')?.addEventListener('click', userAcceptsStart);
    els.chatQuickChipsBar.querySelector('#chip-learn-method')?.addEventListener('click', userAsksMethodInfo);
  }

  function userAcceptsStart() {
    state.onboardingDone = true;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const userMsg = `
      <div class="message-row self">
        <div class="msg-bubble">
          <div>Tôi đã sẵn sàng, hãy đưa ra câu hỏi đầu tiên! 🧭</div>
          <div class="msg-meta-row"><span>${timeStr}</span><span class="tick-icon">✓✓</span></div>
        </div>
      </div>
    `;
    els.messageStreamContainer.insertAdjacentHTML('beforeend', userMsg);
    scrollChatToBottom();

    showTypingIndicator(true);
    setTimeout(() => {
      showTypingIndicator(false);
      renderCurrentQuestion();
    }, 700);
  }

  function userAsksMethodInfo() {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const botReply = `
      <div class="message-row others">
        <div class="msg-sender-avatar">🌸</div>
        <div class="msg-bubble">
          <div>Hệ thống kết hợp 3 hình thức cân não:<br>
            • 🟢 <strong>Mệnh đề nguyên lý:</strong> Đo mức độ bạn cam kết với một nguyên tắc (5 mức Likert).<br>
            • ⚖️ <strong>Song đề cân não (Vế A vs Vế B):</strong> Đặt 2 giá trị đều đáng trân trọng lên bàn cân.<br>
            • 🌾 <strong>Đào sâu căn cơ ("Vì sao"):</strong> Khám phá động cơ triết học sâu xa khi bạn đưa ra quyết định xác quyết.<br>
            <em>Hệ thống không đánh giá đúng-sai, chỉ đo lường cấu trúc giá trị của bạn.</em>
          </div>
          <div class="msg-meta-row"><span>${timeStr}</span></div>
        </div>
      </div>
    `;
    els.messageStreamContainer.insertAdjacentHTML('beforeend', botReply);
    scrollChatToBottom();
  }

  // ==========================================================================
  // 6. RENDER CÂU HỎI HIỆN TẠI (MỆNH ĐỀ HOẶC SONG ĐỀ)
  // ==========================================================================

  function renderCurrentQuestion() {
    const idx = state.currentQueueIndex;

    // Kiểm tra điểm rẽ nhánh thích ứng tại mốc câu 12
    if (idx === 12 && !state.adaptiveTriggered) {
      checkAndTriggerAdaptiveBranching();
      return;
    }

    // Kiểm tra hoàn thành bài test
    if (idx >= state.activeQueue.length) {
      showFinalFlowerResult();
      return;
    }

    updateProgressBar(idx + 1);
    const item = state.activeQueue[idx];

    if (item.type === 'statement') {
      renderStatementCard(idx, item.data);
    } else if (item.type === 'dilemma') {
      renderDilemmaCard(idx, item.data);
    }
  }

  // --- RENDER DẠNG 1: MỆNH ĐỀ NGUYÊN LÝ (5 MỨC LIKERT) ---
  function renderStatementCard(idx, stmt) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const stmtHtml = `
      <div class="message-row others statement-message-row">
        <div class="msg-sender-avatar">🌸</div>
        <div class="msg-bubble statement-bubble">
          <div class="likert-statement-compact">
            <div class="statement-top-pill">
              <span class="pill-badge">⚡ Câu ${idx + 1}/${state.targetTotal}</span>
              <span class="pill-category">${stmt.dim}</span>
            </div>
            <div class="statement-proposition">${stmt.text}</div>
            
            <div class="likert-scale-dock">
              <div class="likert-scale-labels">
                <span class="scale-lbl-agree">🟢 Đồng tình</span>
                <span class="scale-lbl-disagree">Không đồng tình 🔴</span>
              </div>
              
              <div class="likert-dots-track" data-q-idx="${idx}">
                <div class="track-connecting-line"></div>
                ${likertScaleOptions.map(opt => `
                  <button class="likert-dot-node ${opt.cssClass}" data-level="${opt.level}" data-score="${opt.score}" title="${opt.label}">
                    <span class="dot-circle">
                      <span class="dot-check-icon">✓</span>
                    </span>
                  </button>
                `).join('')}
              </div>

              <div class="likert-live-indicator" id="live-ind-${idx}">
                Chạm vòng tròn để chọn mức độ cam kết
              </div>
            </div>
          </div>
          <div class="msg-meta-row"><span>${timeStr}</span></div>
        </div>
      </div>
    `;

    els.messageStreamContainer.insertAdjacentHTML('beforeend', stmtHtml);
    scrollChatToBottom();
    attachStatementEvents(idx, stmt);
    renderStatementQuickChips(idx, stmt);
  }

  function attachStatementEvents(idx, stmt) {
    const track = els.messageStreamContainer.querySelector(`.likert-dots-track[data-q-idx="${idx}"]`);
    const liveInd = els.messageStreamContainer.querySelector(`#live-ind-${idx}`);
    if (!track) return;

    track.querySelectorAll('.likert-dot-node').forEach(btn => {
      const level = parseInt(btn.getAttribute('data-level'), 10);
      const score = parseInt(btn.getAttribute('data-score'), 10);
      const opt = likertScaleOptions.find(o => o.level === level);

      btn.addEventListener('mouseenter', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd && opt) {
          liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">${opt.glyph} ${opt.label} (${score > 0 ? '+' : ''}${score})</span>`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd) liveInd.textContent = 'Chạm vòng tròn để chọn mức độ cam kết';
      });

      btn.addEventListener('click', () => {
        handleStatementSelection(idx, stmt, level, score);
      });
    });
  }

  function renderStatementQuickChips(idx, stmt) {
    els.chatQuickChipsBar.className = 'chat-quick-chips-bar quick-likert-dock';
    els.chatQuickChipsBar.innerHTML = likertScaleOptions.map(opt => `
      <button class="quick-likert-btn ${opt.cssClass}" data-chip-level="${opt.level}" data-chip-score="${opt.score}">
        <span class="quick-dot-preview"></span>
        <span class="quick-label-text">${opt.quickLabel}</span>
      </button>
    `).join('');

    els.chatQuickChipsBar.querySelectorAll('[data-chip-level]').forEach(btn => {
      btn.addEventListener('click', () => {
        const level = parseInt(btn.getAttribute('data-chip-level'), 10);
        const score = parseInt(btn.getAttribute('data-chip-score'), 10);
        handleStatementSelection(idx, stmt, level, score);
      });
    });
  }

  // --- RENDER DẠNG 2: SONG ĐỀ CÂN NÃO (VẾ A VS VẾ B) ---
  function renderDilemmaCard(idx, dilemma) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const dilemmaHtml = `
      <div class="message-row others statement-message-row">
        <div class="msg-sender-avatar">⚖️</div>
        <div class="msg-bubble statement-bubble">
          <div class="dilemma-card-compact">
            <div class="statement-top-pill">
              <span class="pill-badge" style="background:#EDE9FE; color:#5B21B6;">⚖️ Song Đề ${idx + 1}/${state.targetTotal}</span>
              <span class="pill-category">${dilemma.title}</span>
            </div>

            <div class="dilemma-wings-container">
              <div class="dilemma-wing wing-a">
                <span class="wing-tag">VẾ A</span>
                <div class="wing-text">${dilemma.wingA}</div>
              </div>

              <div class="dilemma-vs-divider">VS</div>

              <div class="dilemma-wing wing-b">
                <span class="wing-tag">VẾ B</span>
                <div class="wing-text">${dilemma.wingB}</div>
              </div>
            </div>

            <div class="dilemma-scale-dock">
              <div class="dilemma-track" data-d-idx="${idx}">
                <div class="dilemma-connecting-line"></div>
                ${dilemmaScaleOptions.map(opt => `
                  <button class="dilemma-node ${opt.cssClass}" data-step="${opt.step}" data-weight="${opt.weight}" title="${opt.label}">
                    <span class="dilemma-dot">${opt.glyph}</span>
                  </button>
                `).join('')}
              </div>

              <div class="dilemma-live-indicator" id="d-live-ind-${idx}">
                Trượt để chọn cán cân nghiêng về bên nào
              </div>
            </div>
          </div>
          <div class="msg-meta-row"><span>${timeStr}</span></div>
        </div>
      </div>
    `;

    els.messageStreamContainer.insertAdjacentHTML('beforeend', dilemmaHtml);
    scrollChatToBottom();
    attachDilemmaEvents(idx, dilemma);
    renderDilemmaQuickChips(idx, dilemma);
  }

  function attachDilemmaEvents(idx, dilemma) {
    const track = els.messageStreamContainer.querySelector(`.dilemma-track[data-d-idx="${idx}"]`);
    const liveInd = els.messageStreamContainer.querySelector(`#d-live-ind-${idx}`);
    if (!track) return;

    track.querySelectorAll('.dilemma-node').forEach(btn => {
      const step = btn.getAttribute('data-step');
      const weight = parseInt(btn.getAttribute('data-weight'), 10);
      const opt = dilemmaScaleOptions.find(o => o.step === step);

      btn.addEventListener('mouseenter', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd && opt) {
          liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">${opt.glyph} ${opt.label}</span>`;
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (btn.hasAttribute('disabled')) return;
        if (liveInd) liveInd.textContent = 'Trượt để chọn cán cân nghiêng về bên nào';
      });

      btn.addEventListener('click', () => {
        handleDilemmaSelection(idx, dilemma, step, weight);
      });
    });
  }

  function renderDilemmaQuickChips(idx, dilemma) {
    els.chatQuickChipsBar.className = 'chat-quick-chips-bar quick-likert-dock';
    els.chatQuickChipsBar.innerHTML = dilemmaScaleOptions.map(opt => `
      <button class="quick-likert-btn" data-d-step="${opt.step}" data-d-weight="${opt.weight}" style="border-color:${opt.color};">
        <span class="quick-dot-preview" style="background:${opt.color};"></span>
        <span class="quick-label-text">${opt.quickLabel}</span>
      </button>
    `).join('');

    els.chatQuickChipsBar.querySelectorAll('[data-d-step]').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = btn.getAttribute('data-d-step');
        const weight = parseInt(btn.getAttribute('data-d-weight'), 10);
        handleDilemmaSelection(idx, dilemma, step, weight);
      });
    });
  }

  // ==========================================================================
  // 7. XỬ LÝ PHẢN HỒI & TÍNH ĐIỂM
  // ==========================================================================

  function handleStatementSelection(idx, stmt, level, score) {
    const track = els.messageStreamContainer.querySelector(`.likert-dots-track[data-q-idx="${idx}"]`);
    if (track) {
      track.querySelectorAll('.likert-dot-node').forEach(b => {
        b.setAttribute('disabled', 'true');
        const bLevel = parseInt(b.getAttribute('data-level'), 10);
        if (bLevel === level) b.classList.add('selected');
        else b.classList.add('dimmed');
      });
    }

    const opt = likertScaleOptions.find(o => o.level === level);
    const liveInd = els.messageStreamContainer.querySelector(`#live-ind-${idx}`);
    if (liveInd && opt) {
      liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">✓ Đã chọn: ${opt.label}</span>`;
    }

    // Tích lũy điểm vào trục (dir A: cộng thuận, dir B: đảo nghịch)
    const axisKey = `axis${stmt.axis}`;
    const sign = stmt.dir === 'A' ? 1 : -1;
    const finalScore = score * sign;

    state.scores[axisKey] = (state.scores[axisKey] || 0) + finalScore;
    state.counts[axisKey] = (state.counts[axisKey] || 0) + 1;
    state.answers[stmt.id] = score;

    // Render phản hồi người dùng
    renderUserAnswerBubble(`${opt.glyph} ${opt.label}`);

    // Nếu chọn dứt khoát (+2 hoặc -2) ở các câu chốt -> Kích hoạt câu hỏi Vì sao
    if (Math.abs(score) === 2 && (idx === 1 || idx === 6 || idx === 9)) {
      triggerReasoningProbe(idx, stmt);
    } else {
      advanceToNextQuestion();
    }
  }

  function handleDilemmaSelection(idx, dilemma, step, weight) {
    const track = els.messageStreamContainer.querySelector(`.dilemma-track[data-d-idx="${idx}"]`);
    if (track) {
      track.querySelectorAll('.dilemma-node').forEach(b => {
        b.setAttribute('disabled', 'true');
        if (b.getAttribute('data-step') === step) b.classList.add('selected');
        else b.classList.add('dimmed');
      });
    }

    const opt = dilemmaScaleOptions.find(o => o.step === step);
    const liveInd = els.messageStreamContainer.querySelector(`#d-live-ind-${idx}`);
    if (liveInd && opt) {
      liveInd.innerHTML = `<span style="color:${opt.color}; font-weight:800;">✓ Cán cân: ${opt.label}</span>`;
    }

    // Ghi nhận điểm song đề
    const axisKey1 = `axis${dilemma.primaryAxis}`;
    state.scores[axisKey1] = (state.scores[axisKey1] || 0) + weight;
    state.counts[axisKey1] = (state.counts[axisKey1] || 0) + 1;
    state.answers[dilemma.id] = weight;

    renderUserAnswerBubble(`${opt.glyph} ${opt.label}`);
    advanceToNextQuestion();
  }

  function renderUserAnswerBubble(text) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const userMsg = `
      <div class="message-row self">
        <div class="msg-bubble">
          <div><strong>${text}</strong></div>
          <div class="msg-meta-row"><span>${timeStr}</span><span class="tick-icon">✓✓</span></div>
        </div>
      </div>
    `;
    els.messageStreamContainer.insertAdjacentHTML('beforeend', userMsg);
    scrollChatToBottom();
  }

  function advanceToNextQuestion() {
    showTypingIndicator(true);
    setTimeout(() => {
      showTypingIndicator(false);
      state.currentQueueIndex++;
      renderCurrentQuestion();
    }, 450);
  }

  // --- KÍCH HOẠT CÂU HỎI "VÌ SAO?" (GROUNDING PROBE) ---
  function triggerReasoningProbe(idx, stmt) {
    showTypingIndicator(true);
    setTimeout(() => {
      showTypingIndicator(false);
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const probeHtml = `
        <div class="message-row others">
          <div class="msg-sender-avatar">🌾</div>
          <div class="msg-bubble">
            <div>Bạn vừa đưa ra lựa chọn rất dứt khoát!</div>
            <div class="reasoning-probe-card" id="probe-card-${idx}">
              <div class="reasoning-header">
                <span>🌾 Đâu là căn cơ lý lẽ sâu xa nhất cho trực giác này của bạn?</span>
              </div>
              ${REASONING_OPTIONS.slice(0, 4).map(opt => `
                <button class="reasoning-option-btn" data-reason-key="${opt.key}">
                  <strong>${opt.label}</strong><br>
                  <span style="font-size:0.72rem; color:#64748B;">${opt.desc}</span>
                </button>
              `).join('')}
            </div>
            <div class="msg-meta-row"><span>${timeStr}</span></div>
          </div>
        </div>
      `;

      els.messageStreamContainer.insertAdjacentHTML('beforeend', probeHtml);
      scrollChatToBottom();

      const probeCard = document.getElementById(`probe-card-${idx}`);
      probeCard?.querySelectorAll('.reasoning-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          probeCard.querySelectorAll('.reasoning-option-btn').forEach(b => b.setAttribute('disabled', 'true'));
          btn.classList.add('selected');
          const reasonKey = btn.getAttribute('data-reason-key');
          state.reasoningAnswers[stmt.id] = reasonKey;

          renderUserAnswerBubble(`🌾 Căn cơ: ${REASONING_OPTIONS.find(o => o.key === reasonKey)?.label}`);
          advanceToNextQuestion();
        });
      });
    }, 500);
  }

  // ==========================================================================
  // 8. ĐÁNH GIÁ THÍCH ỨNG & RẼ NHÁNH TỰ ĐỘNG (ADAPTIVE BRANCHING)
  // ==========================================================================

  function evaluateCandidateRankings() {
    // Chuẩn hóa điểm 4 trục về thang [-2, +2]
    const uVector = {
      axis1: state.counts.axis1 ? (state.scores.axis1 / state.counts.axis1) : 0,
      axis2: state.counts.axis2 ? (state.scores.axis2 / state.counts.axis2) : 0,
      axis3: state.counts.axis3 ? (state.scores.axis3 / state.counts.axis3) : 0,
      axis4: state.counts.axis4 ? (state.scores.axis4 / state.counts.axis4) : 0
    };

    // So khớp khoảng cách Euclid với 8 hình mẫu hoa
    const rankings = Object.keys(FLOWER_LIBRARY).map(key => {
      const flower = FLOWER_LIBRARY[key];
      const p = flower.profile;
      const dist = Math.sqrt(
        Math.pow(uVector.axis1 - p.axis1, 2) +
        Math.pow(uVector.axis2 - p.axis2, 2) +
        Math.pow(uVector.axis3 - p.axis3, 2) +
        Math.pow(uVector.axis4 - p.axis4, 2)
      );
      // Điểm độ tương đồng (0 đến 100%)
      const matchScore = Math.max(0, 100 - (dist * 18));
      return { key, flower, dist, matchScore };
    });

    rankings.sort((a, b) => b.matchScore - a.matchScore);
    state.topRankings = rankings;
    return { uVector, rankings };
  }

  function checkAndTriggerAdaptiveBranching() {
    state.adaptiveTriggered = true;
    const { uVector, rankings } = evaluateCandidateRankings();
    const top1 = rankings[0];
    const top2 = rankings[1];

    // Khoảng cách giữa Top 1 và Top 2
    const margin = (top1.matchScore - top2.matchScore);

    // NẾU RÕ RÀNG VƯỢT TRỘI (Margin >= 22% & matchScore > 75%)
    // -> Đi thẳng vào câu Tie-Breaker và kết thúc ở câu 13!
    if (margin >= 22 && top1.matchScore >= 75) {
      state.confidenceScore = 0.94;
      state.matchedFlowerKey = top1.key;
      state.activeQueue.push({
        type: 'statement',
        data: STATEMENTS_BANK.find(s => s.id === 's1_5') // Câu chốt hạ
      });
      state.targetTotal = 13;

      renderCurrentQuestion();
      return;
    }

    // NẾU SÁT NÚT HOẶC CÓ PHÂN HÓA (Hybrid / Ambiguous)
    // -> Kích hoạt Vòng thích ứng Tầng 2 (Mở rộng thêm 12 câu = Tổng 24 câu)
    state.currentTier = 2;
    state.targetTotal = 24;

    showTypingIndicator(true);
    setTimeout(() => {
      showTypingIndicator(false);
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const noticeHtml = `
        <div class="message-row others">
          <div class="msg-sender-avatar">🤖</div>
          <div class="msg-bubble">
            <div class="adaptive-notice-card">
              <span class="adaptive-badge">🌱 DUHAT ADAPTIVE ENGINE KÍCH HOẠT</span>
              <div>
                <strong>Bản đồ tư duy của bạn mang cấu trúc đa tầng rất độc đáo!</strong><br>
                Sau 12 câu cốt lõi, hệ thống phát hiện sự giao thoa sát nút giữa <strong>${top1.flower.emoji} ${top1.flower.flowerName}</strong> (${Math.round(top1.matchScore)}%) và <strong>${top2.flower.emoji} ${top2.flower.flowerName}</strong> (${Math.round(top2.matchScore)}%).
              </div>
              <div style="font-size:0.75rem; color:#4F46E5;">
                ⚡ Hệ thống tự động mở rộng thêm <strong>12 câu thích ứng chuyên biệt</strong> để bóc tách chính xác căn tính và phẩm chất lai (Hybrid) của bạn!
              </div>
            </div>
            <div class="msg-meta-row"><span>${timeStr}</span></div>
          </div>
        </div>
      `;

      els.messageStreamContainer.insertAdjacentHTML('beforeend', noticeHtml);
      scrollChatToBottom();

      // Nạp 12 câu hỏi thích ứng tiếp theo vào hàng đợi
      appendAdaptiveTier2Questions();

      // Tiếp tục ngay với câu 13
      setTimeout(() => {
        renderCurrentQuestion();
      }, 800);
    }, 700);
  }

  function appendAdaptiveTier2Questions() {
    // 8 Mệnh đề phân rẽ + 4 Song đề nâng cao chưa có trong Tầng 1
    const tier2Questions = [
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's1_2') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's1_8') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd5') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's2_2') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's2_10') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd6') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's3_2') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's3_8') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd7') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's4_2') },
      { type: 'statement', data: STATEMENTS_BANK.find(s => s.id === 's4_8') },
      { type: 'dilemma', data: DILEMMAS_BANK.find(d => d.id === 'd8') }
    ];

    tier2Questions.forEach(q => state.activeQueue.push(q));
  }

  // ==========================================================================
  // 9. XUẤT KẾT QUẢ CUỐI CÙNG & MÔ HÌNH BA LỚP
  // ==========================================================================

  function showFinalFlowerResult() {
    state.completed = true;
    updateProgressBar(state.targetTotal);

    const { uVector, rankings } = evaluateCandidateRankings();
    const primary = rankings[0];
    const secondary = rankings[1];

    state.matchedFlowerKey = primary.key;
    state.hybridFlowerKey = (primary.matchScore - secondary.matchScore < 15) ? secondary.key : null;
    state.confidenceScore = state.targetTotal >= 24 ? 0.95 : 0.88;

    const flower = primary.flower;
    const hybridFlower = state.hybridFlowerKey ? FLOWER_LIBRARY[state.hybridFlowerKey] : null;

    showTypingIndicator(true);
    setTimeout(() => {
      showTypingIndicator(false);
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const resultHtml = `
        <div class="message-row others">
          <div class="msg-sender-avatar">🌸</div>
          <div class="msg-bubble">
            <div>🎉 <strong>Bạn đã hoàn thành khảo sát thích ứng ${state.targetTotal} câu!</strong></div>
            <p style="margin: 6px 0;">Thuật toán La bàn đã so khớp vector phản hồi của bạn và giải mã cấu trúc giá trị 3 lớp:</p>

            <div class="result-trigger-card">
              <div class="result-flower-hero">${flower.emoji}</div>
              <div class="result-trigger-title">${flower.flowerName}</div>
              <div class="result-trigger-sub">${flower.tagline}</div>
              
              ${hybridFlower ? `
                <div class="hybrid-badge">
                  <span>🧬 Phẩm chất lai:</span> ${hybridFlower.emoji} ${hybridFlower.flowerName} (Ảnh hưởng ${Math.round(secondary.matchScore)}%)
                </div>
              ` : ''}

              <div style="font-size:0.75rem; color:#059669; font-weight:800; margin-top:6px;">
                🎯 Độ tin cậy thuật toán: ${(state.confidenceScore * 100).toFixed(0)}% (Qua ${state.targetTotal} câu đa tầng)
              </div>

              <button class="btn-view-flower-card" id="btn-open-result-profile">
                🌸 Mở Thẻ Hồ Sơ Ba Lớp & Cách Phối Hợp Team
              </button>
            </div>
            <div class="msg-meta-row"><span>${timeStr}</span></div>
          </div>
        </div>
      `;

      els.messageStreamContainer.insertAdjacentHTML('beforeend', resultHtml);
      scrollChatToBottom();

      els.chatQuickChipsBar.className = 'chat-quick-chips-bar';
      els.chatQuickChipsBar.innerHTML = `
        <button class="chat-chip-btn accent-chip" id="chip-view-card-end">🌸 Xem thẻ hồ sơ hoa</button>
        <button class="chat-chip-btn" id="chip-restart-end">🔄 Làm lại trắc nghiệm</button>
      `;

      document.getElementById('btn-open-result-profile')?.addEventListener('click', openProfileScreen);
      document.getElementById('chip-view-card-end')?.addEventListener('click', openProfileScreen);
      document.getElementById('chip-restart-end')?.addEventListener('click', resetAdaptiveTest);
    }, 800);
  }

  function resetAdaptiveTest() {
    state.currentQueueIndex = 0;
    state.scores = { axis1: 0, axis2: 0, axis3: 0, axis4: 0 };
    state.counts = { axis1: 0, axis2: 0, axis3: 0, axis4: 0 };
    state.answers = {};
    state.reasoningAnswers = {};
    state.completed = false;
    state.onboardingDone = false;
    state.adaptiveTriggered = false;
    els.messageStreamContainer.innerHTML = '';
    initializeCoreQueue();
    updateProgressBar(0);
    startLikertAssessment();
  }

  // ==========================================================================
  // 10. MÀN HÌNH HỒ SƠ HOA (PROFILE SCREEN) & MA TRẬN PHỐI HỢP
  // ==========================================================================

  function openProfileScreen() {
    const flower = FLOWER_LIBRARY[state.matchedFlowerKey] || FLOWER_LIBRARY['huong_duong'];
    const hybrid = state.hybridFlowerKey ? FLOWER_LIBRARY[state.hybridFlowerKey] : null;

    els.flowerCardEmoji.textContent = flower.emoji;
    els.flowerCardName.textContent = flower.flowerName;
    els.flowerCardTagline.textContent = flower.tagline;
    els.dimCoreVal.textContent = flower.coreVal;
    els.dimLeadership.textContent = flower.leadership;
    els.dimThinking.textContent = flower.thinking;
    els.flowerPortraitText.textContent = flower.portrait;
    els.flowerStrengthBox.innerHTML = `<strong>💪 Điểm mạnh cốt lõi:</strong> ${flower.strength}`;
    els.flowerMisunderstoodText.textContent = flower.misunderstood;
    els.flowerCollabTips.innerHTML = flower.collabTips.map(t => `<li style="margin-bottom:6px;">${t}</li>`).join('');

    // Render Ba Lớp Thấu Triệt vào profile
    renderThreeLayerDiagnosis(flower, hybrid);

    renderProfileSynergy('sen_da');
    renderGardenSynergy('sen_da');

    const welcomeBubble = document.getElementById('flower-qa-welcome-bubble');
    if (welcomeBubble) {
      welcomeBubble.innerHTML = `Quak quak! 🦆 Chào bạn, mình là <strong>Duhat AI Copilot</strong>. Bạn mang hình mẫu <strong>${flower.flowerName}</strong> (${flower.emoji})${hybrid ? ` kết hợp phẩm chất lai <strong>${hybrid.flowerName}</strong>` : ''}! Bạn muốn khám phá điểm mù hành vi hay bí kíp phối hợp cùng team?`;
    }

    navigateTo('screen-flower-profile');
  }

  function renderThreeLayerDiagnosis(flower, hybrid) {
    let container = document.getElementById('three-layer-container');
    if (!container) {
      const parent = document.querySelector('.profile-section-card');
      if (parent) {
        container = document.createElement('div');
        container.id = 'three-layer-container';
        parent.parentNode.insertBefore(container, parent.nextSibling);
      }
    }

    if (!container) return;

    // Tính toán tỷ lệ 4 trục
    const ax1 = Math.min(100, Math.max(0, 50 + (state.scores.axis1 || 0) * 8));
    const ax2 = Math.min(100, Math.max(0, 50 + (state.scores.axis2 || 0) * 8));
    const ax3 = Math.min(100, Math.max(0, 50 + (state.scores.axis3 || 0) * 8));
    const ax4 = Math.min(100, Math.max(0, 50 + (state.scores.axis4 || 0) * 8));

    container.innerHTML = `
      <div class="profile-section-card" style="margin-top: 10px;">
        <h4 class="section-head-title">🧭 Chẩn Đoán Ba Lớp & Cân Bằng 4 Trục</h4>
        
        <div class="three-layer-card">
          <div class="layer-row">
            <span class="layer-title">Lớp 1: Quyết Sách Hành Vi (Chính sách)</span>
            <div class="layer-content">
              Nghiêng về: <strong>${flower.coreVal}</strong>. Khi đối diện tình huống thực tế, phản xạ của bạn ưu tiên giải pháp rõ ràng, tính hành động cao.
            </div>
          </div>

          <div class="layer-row">
            <span class="layer-title">Lớp 2: Động Cơ Căn Cơ (Lý lẽ sâu xa)</span>
            <div class="layer-content">
              ${hybrid ? `Bạn có sự giằng xé thú vị: Bề ngoài hành động dứt khoát như <strong>${flower.flowerName}</strong>, nhưng động cơ sâu xa lại hướng về sự thấu cảm của <strong>${hybrid.flowerName}</strong>.` : `Căn cơ lý lẽ và hành vi của bạn có độ đồng nhất cao, thể hiện bản lĩnh kiên định.`}
            </div>
          </div>

          <div class="layer-row">
            <span class="layer-title">Lớp 3: Tự Nhận Thức & Điểm Mù (Shadow Self)</span>
            <div class="layer-content" style="color:#B45309;">
              ⚠️ <em>${flower.misunderstood}</em>
            </div>
          </div>
        </div>

        <div style="margin-top: 12px;">
          <div style="font-size:0.75rem; font-weight:800; color:#475569; margin-bottom:6px;">📊 TỌA ĐỘ TRÊN 4 TRỤC GIÁ TRỊ:</div>
          
          <div class="radar-axis-bar">
            <span class="radar-axis-label">Tốc độ vs Hoàn hảo</span>
            <div class="radar-track">
              <div class="radar-indicator" style="width:${ax1}%; background:#0284C7;"></div>
            </div>
          </div>

          <div class="radar-axis-bar">
            <span class="radar-axis-label">Tập trung vs Phân quyền</span>
            <div class="radar-track">
              <div class="radar-indicator" style="width:${ax2}%; background:#7C3AED;"></div>
            </div>
          </div>

          <div class="radar-axis-bar">
            <span class="radar-axis-label">Sòng phẳng vs Trắc ẩn</span>
            <div class="radar-track">
              <div class="radar-indicator" style="width:${ax3}%; background:#10B981;"></div>
            </div>
          </div>

          <div class="radar-axis-bar">
            <span class="radar-axis-label">Độc bản vs Đại cuộc</span>
            <div class="radar-track">
              <div class="radar-indicator" style="width:${ax4}%; background:#F59E0B;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- SYNERGY MATRIX GIỮ NGUYÊN HOÀN HẢO ---
  const synergyMatrix = {
    'sen_da': {
      partnerName: 'Nam', partnerFlower: 'Hoa Sen Đá', partnerEmoji: '🪴',
      partnerRole: 'Tâm · Nền tảng tự vận hành',
      synergyTag: 'Bộ Đôi Trọng Tâm & Bền Vững (Độ ăn ý: 94%)',
      strengths: 'Cả hai đều có tư duy hệ thống và coi trọng cam kết dài hạn. Một người dẫn dắt mục tiêu dứt khoát, còn Sen Đá xây dựng quy trình và checklist vững chắc để cả nhóm tự vận hành trơn tru.',
      friction: 'Đều có xu hướng cẩn trọng nên khi cần xoay trục bất ngờ trong vài phút, cả hai dễ rơi vào trạng thái cần thêm thời gian rà soát.',
      collabTips: [
        'Chốt rõ mốc thời hạn và đầu ra (output), giao toàn quyền chủ động cho Sen Đá thiết kế cơ chế thực thi.',
        'Sen Đá tóm tắt 3 điểm mấu chốt cần duyệt thay vì gửi tài liệu quá chi tiết.'
      ]
    },
    'cam_tu_cau': {
      partnerName: 'Linh', partnerFlower: 'Hoa Cẩm Tú Cầu', partnerEmoji: '🌸',
      partnerRole: 'Trí & Tín · Kết nối hệ sinh thái đa chiều',
      synergyTag: 'Cặp Đôi Cầu Nối & Đột Phá (Độ ăn ý: 92%)',
      strengths: 'Cẩm Tú Cầu là thỏi nam châm kết nối các nguồn lực và nhân sự bổ trợ, kết hợp thực thi cam kết tạo ra đòn bẩy đa chiều.',
      friction: 'Cẩm Tú Cầu thích tham vấn ý kiến nhiều bên, trong khi người hành động chuộng sự dứt khoát để giữ đúng hạn.',
      collabTips: [
        'Cẩm Tú Cầu lọc sẵn 2 phương án khả thi kèm dữ liệu kiểm chứng trước khi trao đổi.',
        'Mở lòng lắng nghe các mối quan hệ liên đới trước khi đưa ra quyết định cuối cùng.'
      ]
    },
    'do_quyen': {
      partnerName: 'An', partnerFlower: 'Hoa Đỗ Quyên', partnerEmoji: '🌺',
      partnerRole: 'Tốc · Tia chớp bứt phá & Đơn giản',
      synergyTag: 'Tia Chớp & Kim Chỉ Nam (Độ ăn ý: 88%)',
      strengths: 'Bộ đôi bù trừ hoàn hảo: Đỗ Quyên kéo nhanh tiến độ, chớp thời cơ và phá vỡ sức ỳ; người đồng hành kiểm soát tác động dây chuyền.',
      friction: 'Đỗ Quyên ghét sự chậm trễ và quy trình rườm rà; người hệ thống lo ngại sự vội vàng thiếu tính toán lâu dài.',
      collabTips: [
        'Xác lập trước "hành lang an toàn" để Đỗ Quyên tự do bứt phá.',
        'Đỗ Quyên báo trước sớm các thử nghiệm mới để kịp thời chuẩn bị phương án dự phòng.'
      ]
    }
  };

  function renderProfileSynergy(partnerKey) {
    const item = synergyMatrix[partnerKey] || synergyMatrix['sen_da'];
    if (!els.profileSynergyContent) return;
    els.profileSynergyContent.innerHTML = `
      <div class="synergy-badge-row">
        <div style="font-size:0.88rem; font-weight:800; color:#1A1A1A;">
          ${item.partnerEmoji} ${item.partnerName} · ${item.partnerFlower}
        </div>
        <span class="synergy-pill-tag">${item.synergyTag}</span>
      </div>
      <div style="font-size:0.75rem; color:#64748B; font-weight:600; margin-bottom:8px;">
        Hình mẫu: ${item.partnerRole}
      </div>
      <div class="synergy-dim-block">
        <div class="synergy-dim-item synergy-item-green">
          <strong>✨ Điểm cộng phối hợp:</strong> ${item.strengths}
        </div>
        <div class="synergy-dim-item synergy-item-orange">
          <strong>⚡ Vùng va chạm tiềm ẩn:</strong> ${item.friction}
        </div>
        <div class="synergy-dim-item synergy-item-purple">
          <strong>💡 Bí kíp phối hợp vàng:</strong>
          <ul style="margin: 4px 0 0 16px;">
            ${item.collabTips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function renderGardenSynergy(partnerKey) {
    const item = synergyMatrix[partnerKey] || synergyMatrix['sen_da'];
    if (!els.gardenSynergyDetail) return;
    const currentFlower = FLOWER_LIBRARY[state.matchedFlowerKey] || FLOWER_LIBRARY['huong_duong'];
    if (els.gardenSynergyTitle) {
      els.gardenSynergyTitle.innerHTML = `🤝 Cách kết hợp: ${currentFlower.emoji} Bạn + ${item.partnerEmoji} ${item.partnerName} (${item.partnerFlower})`;
    }
    els.gardenSynergyDetail.innerHTML = `
      <div class="synergy-badge-row">
        <span class="synergy-pill-tag">${item.synergyTag}</span>
        <span style="font-size:0.75rem; color:#059669; font-weight:700;">${item.partnerRole}</span>
      </div>
      <div class="synergy-dim-block">
        <div class="synergy-dim-item synergy-item-green">
          <strong>✨ Điểm bù trừ bứt phá:</strong> ${item.strengths}
        </div>
        <div class="synergy-dim-item synergy-item-orange">
          <strong>⚡ Vùng va chạm tiềm ẩn:</strong> ${item.friction}
        </div>
        <div class="synergy-dim-item synergy-item-purple">
          <strong>💡 Cách phối hợp mượt mà:</strong>
          <ul style="margin: 4px 0 0 16px;">
            ${item.collabTips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // --- SHARE TO GROUP CHAT ---
  let hasSharedToGroup = false;
  function shareToGroupChat() {
    navigateTo('screen-group-chat');
    if (!hasSharedToGroup && els.groupSharedCardContainer) {
      hasSharedToGroup = true;
      const flower = FLOWER_LIBRARY[state.matchedFlowerKey] || FLOWER_LIBRARY['huong_duong'];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const sharedCardHtml = `
        <div class="message-row self" style="margin-top: 10px;">
          <div class="msg-bubble shared-flower-card-bubble">
            <div class="shared-card-header">
              <span>🦆 DUHAT AI · THẺ HÌNH MẪU 72 LOÀI HOA</span>
            </div>
            <div class="shared-card-body">
              <div class="shared-flower-icon">${flower.emoji}</div>
              <div class="shared-flower-info">
                <h4>${flower.flowerName}</h4>
                <p>${flower.tagline}</p>
                <div style="font-size:0.68rem; color:#854D0E; font-weight:700; margin-top:2px;">
                  ${flower.coreVal} · ${flower.leadership}
                </div>
              </div>
            </div>
            <button class="btn-view-synergy-inline" id="btn-group-inspect-synergy">
              <span>🔍</span> Xem cách phối hợp cùng đồng đội trong nhóm
            </button>
            <div class="msg-meta-row" style="color:#854D0E;"><span>${timeStr}</span><span class="tick-icon">✓✓</span></div>
          </div>
        </div>
      `;

      els.groupSharedCardContainer.innerHTML = sharedCardHtml;
      document.getElementById('btn-group-inspect-synergy')?.addEventListener('click', () => {
        navigateTo('screen-garden');
      });

      setTimeout(() => {
        const replyLinh = `
          <div class="message-row others">
            <div class="msg-sender-avatar" style="background:#FDE68A;">🌸</div>
            <div class="msg-bubble">
              <div class="msg-sender-name" style="color:#B45309;">
                <span>Linh</span>
                <span class="sender-flower-badge" style="background:#FEF3C7; color:#92400E;">🌸 Cẩm Tú Cầu</span>
              </div>
              <div>Oa! Bạn ra <strong>${flower.flowerName}</strong> chuẩn quá! Kết hợp cùng team là siêu ăn ý luôn 🎉</div>
              <div class="msg-meta-row"><span>${timeStr}</span></div>
            </div>
          </div>
        `;
        els.groupMessageStream.insertAdjacentHTML('beforeend', replyLinh);
        if (els.groupSnippetPreview) els.groupSnippetPreview.textContent = `Linh: Oa! Bạn ra ${flower.flowerName} chuẩn quá! 🎉`;
        if (els.groupUnreadBadge) els.groupUnreadBadge.textContent = '1';
      }, 700);
    }
  }

  // --- COPILOT Q&A ---
  function handleFlowerQA(questionText) {
    if (!questionText || !questionText.trim()) return;
    const q = questionText.trim();
    const dialog = document.getElementById('flower-qa-dialog');
    const input = document.getElementById('input-flower-qa');
    if (input) input.value = '';

    const userHtml = `
      <div class="qa-msg-row user">
        <div class="qa-avatar">👤</div>
        <div class="qa-bubble">${q}</div>
      </div>
    `;
    dialog.insertAdjacentHTML('beforeend', userHtml);
    dialog.scrollTop = dialog.scrollHeight;

    const typingId = 'qa-typing-' + Date.now();
    const typingHtml = `
      <div class="qa-msg-row ai" id="${typingId}">
        <div class="qa-avatar">🦆</div>
        <div class="qa-bubble" style="color:#64748B; font-style:italic;">
          Duhat AI đang phân tích dữ liệu đa tầng...
        </div>
      </div>
    `;
    dialog.insertAdjacentHTML('beforeend', typingHtml);
    dialog.scrollTop = dialog.scrollHeight;

    const currentFlower = FLOWER_LIBRARY[state.matchedFlowerKey] || FLOWER_LIBRARY['huong_duong'];
    setTimeout(() => {
      document.getElementById(typingId)?.remove();
      const replyHtml = `
        <div class="qa-msg-row ai">
          <div class="qa-avatar">🦆</div>
          <div class="qa-bubble">
            Với hình mẫu <strong>${currentFlower.flowerName}</strong>, bạn có ưu thế vượt trội ở <em>${currentFlower.strength}</em>. Khi phối hợp cùng đồng đội, bí kíp lớn nhất là: ${currentFlower.collabTips[0]}.
          </div>
        </div>
      `;
      dialog.insertAdjacentHTML('beforeend', replyHtml);
      dialog.scrollTop = dialog.scrollHeight;
    }, 700);
  }

  // ==========================================================================
  // 11. GẮN SỰ KIỆN GIAO DIỆN CHUNG
  // ==========================================================================

  function setupEvents() {
    els.bannerStartLikert.addEventListener('click', startLikertAssessment);
    els.convItemAi.addEventListener('click', startLikertAssessment);
    els.btnBackInbox.addEventListener('click', () => navigateTo('screen-inbox'));
    els.btnBackFromFlower.addEventListener('click', () => navigateTo('screen-chat'));
    els.btnViewProfileDirect.addEventListener('click', openProfileScreen);

    // Natural text input in chat
    els.btnSubmitMessage.addEventListener('click', () => {
      const txt = els.inputMessage.value.trim();
      if (!txt) return;
      els.inputMessage.value = '';
      renderUserAnswerBubble(txt);
      showTypingIndicator(true);
      setTimeout(() => {
        showTypingIndicator(false);
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const botReply = `
          <div class="message-row others">
            <div class="msg-sender-avatar">🌸</div>
            <div class="msg-bubble">
              <div>Cảm ơn góc nhìn của bạn! Bạn hãy chọn nhanh mức độ trên thanh thẻ phía trên để tiếp tục hành trình nhé 🌸.</div>
              <div class="msg-meta-row"><span>${timeStr}</span></div>
            </div>
          </div>
        `;
        els.messageStreamContainer.insertAdjacentHTML('beforeend', botReply);
        scrollChatToBottom();
      }, 700);
    });

    els.inputMessage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        els.btnSubmitMessage.click();
      }
    });

    // Group chat & garden navigation
    els.convItemGroup?.addEventListener('click', () => navigateTo('screen-group-chat'));
    els.btnShareToGroup?.addEventListener('click', shareToGroupChat);
    els.btnBackFromGroup?.addEventListener('click', () => navigateTo('screen-inbox'));
    els.btnOpenGardenView?.addEventListener('click', () => navigateTo('screen-garden'));
    els.btnBackFromGarden?.addEventListener('click', () => navigateTo('screen-inbox'));
    els.btnGroupToGarden?.addEventListener('click', () => navigateTo('screen-garden'));
    els.btnGardenToGroup?.addEventListener('click', () => navigateTo('screen-group-chat'));

    els.tabGarden?.addEventListener('click', () => navigateTo('screen-garden'));
    els.tabMessages?.addEventListener('click', () => navigateTo('screen-inbox'));

    // Synergy tabs
    els.profileSynergyTabs?.querySelectorAll('.synergy-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        els.profileSynergyTabs.querySelectorAll('.synergy-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const partnerKey = btn.getAttribute('data-partner');
        renderProfileSynergy(partnerKey);
      });
    });

    // Garden pots
    document.querySelectorAll('.garden-member-pot').forEach(pot => {
      pot.addEventListener('click', () => {
        document.querySelectorAll('.garden-member-pot').forEach(p => p.classList.remove('active-inspect'));
        pot.classList.add('active-inspect');
        const partnerKey = pot.getAttribute('data-garden-partner');
        renderGardenSynergy(partnerKey || 'sen_da');
      });
    });

    // Group chat send
    els.btnSendGroupMessage?.addEventListener('click', () => {
      const val = els.inputGroupMessage.value.trim();
      if (!val) return;
      renderUserAnswerBubble(val);
      els.inputGroupMessage.value = '';
    });

    // Q&A Copilot
    document.querySelectorAll('#flower-qa-chips .qa-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        let qText = btn.textContent.replace(/^[^\w\s\u00C0-\u1EF9]+/, '').trim();
        handleFlowerQA(qText);
      });
    });

    const btnSubmitQA = document.getElementById('btn-submit-flower-qa');
    const inputQA = document.getElementById('input-flower-qa');
    btnSubmitQA?.addEventListener('click', () => {
      if (inputQA && inputQA.value.trim()) handleFlowerQA(inputQA.value.trim());
    });

    els.btnToggleTheme.addEventListener('click', () => document.body.classList.toggle('dark-env'));
    els.btnRestartAssessment.addEventListener('click', resetAdaptiveTest);
  }

  setupEvents();
})();
