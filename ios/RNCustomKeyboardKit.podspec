
Pod::Spec.new do |s|
  s.name         = "RNCustomKeyboardKit"
  s.version      = "1.0.0"
  s.summary      = "RNCustomKeyboardKit"
  s.description  = <<-DESC
                  RNCustomKeyboardKit
                   DESC
  s.homepage     = "https://github.com/themodernjavascript/react-native-custom-keyboard-kit"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNCustomKeyboardKit.git", :tag => "master" }
  s.source_files = "ios/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  