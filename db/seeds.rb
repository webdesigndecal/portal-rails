def make_lectures
  1.upto(5) do |n|
    lecture = Lecture.create(
      topic: "Lecture #{n}",
      week: n,
      date: rand(10.months).seconds.ago,
      semester: "sp0#{n}"
    )
    lecture.id = n
    lecture.save
  end
end

def make_assignments
  1.upto(5) do |n|
    assignment = Assignment.create(
      name: "Assignment #{n}",
      points: "5",
      due_date: rand(10.days).seconds.from_now,
      semester: "sp0#{n}",
      lecture: Lecture.where(week: n).first
    )
    assignment.id = n
    assignment.save
  end
end

make_lectures
make_assignments